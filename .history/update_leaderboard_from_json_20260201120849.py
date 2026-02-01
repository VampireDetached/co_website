import json
import re
import os

INPUT_FILE = r'd:\Desktop\HS_bench-dev\results\benchmark\simple_results.json'
OUTPUT_FILE = r'd:\Desktop\website_co\co_site\data\leaderboard.json'

def parse_model_variant(key):
    # Regex to capture the variant part (starting with _v followed by digit)
    # The variant part matches _v\d+.*$
    match = re.search(r'(_v\d+.*$)', key)
    if not match:
        # Fallback or error
        print(f"Warning: Could not parse key {key}")
        return key, "unknown"
    
    variant_suffix = match.group(1) # e.g. _v1-empty
    model_part = key[:-len(variant_suffix)] # e.g. anthropic_claude_haiku_4.5
    
    # Process model name
    # split first underscore
    parts = model_part.split('_', 1)
    if len(parts) == 2:
        provider = parts[0]
        # Special case for x_ai? "x_ai" -> split -> "x", "ai..." -> "x/ai..." 
        # But if model is "x_ai_grok...", parts[0]="x", parts[1]="ai_grok...". 
        # rest = "ai_grok...".replace('_', '-') -> "ai-grok..."
        # result "x/ai-grok..." -> Correct.
        rest = parts[1].replace('_', '-')
        model_name = f"{provider}/{rest}"
    else:
        model_name = model_part.replace('_', '-') # Fallback

    # Process variant
    # _v1-empty -> v1_empty
    variant_name = variant_suffix.lstrip('_').replace('-', '_')
    
    return model_name, variant_name

def main():
    print(f"Reading {INPUT_FILE}...")
    try:
        with open(INPUT_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except Exception as e:
        print(f"Error reading input file: {e}")
        return
    
    configs = data.get('configs', {})
    
    leaderboard_data = []
    
    for key, value in configs.items():
        model_name, variant_name = parse_model_variant(key)
        
        # Identify studies list
        studies = value.get('studies', [])
        
        for study in studies:
            entry = {
                "model": model_name,
                "variant": variant_name,
                "study_id": study.get('study_id'),
                "average_bas": study.get('pas_raw'),
                "ecs": study.get('ecs'),
                "total_output_tokens": study.get('total_tokens'),
                "total_cost": study.get('total_cost')
            }
            leaderboard_data.append(entry)
            
    print(f"Generated {len(leaderboard_data)} entries.")
    
    # Sort for consistency (optional but good)
    # Sort by model, variant, study_id
    leaderboard_data.sort(key=lambda x: (x.get('model',''), x.get('variant',''), x.get('study_id','')))
    
    print(f"Writing to {OUTPUT_FILE}...")
    try:
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            json.dump(leaderboard_data, f, indent=2)
        print("Done.")
    except Exception as e:
        print(f"Error writing output file: {e}")

if __name__ == "__main__":
    main()
