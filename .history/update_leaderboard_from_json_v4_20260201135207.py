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
        if key == "mistralai_mistral_nemo_example-v4":
             return "mistralai_mistral_nemo_example-v4", "unknown"
        print(f"Warning: Could not parse key {key}")
        return key, "unknown"
    
    variant_suffix = match.group(1) # e.g. _v1-empty or _v3.2_v1-empty
    model_part = key[:-len(variant_suffix)] # e.g. anthropic_claude_haiku_4.5 or deepseek_deepseek
    
    # Process model name
    parts = model_part.split('_', 1)
    if len(parts) == 2:
        provider = parts[0]
        rest = parts[1].replace('_', '-')
        model_name = f"{provider}/{rest}"
    else:
        model_name = model_part.replace('_', '-')

    # Process variant
    variant_name = variant_suffix.lstrip('_').replace('-', '_')
    
    # Correction for DeepSeek v3.2 being stuck in variant
    # If variant starts with "v3.2_", move it to model name
    if variant_name.startswith("v3.2_"):
        model_name = model_name + "-v3.2"
        variant_name = variant_name[len("v3.2_"):]

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
    
    excluded_count = 0
    
    for key, value in configs.items():
        model_name, variant_name = parse_model_variant(key)
        
        # --- Filtering Logic ---
        
        # 1. Previous Filters (cleaned up)
        
        # deepseek-chat v4_background
        if model_name == "deepseek/deepseek-chat" and variant_name == "v4_background":
            excluded_count += 1
            continue
            
        # x/ai-grok-4.1-fast v1_empty
        if model_name == "x/ai-grok-4.1-fast" and variant_name == "v1_empty":
            excluded_count += 1
            continue

        # mistral 'temp'
        if 'temp' in model_name:
            excluded_count += 1
            continue
            
        # mistralai_mistral_nemo_example-v4 unknown
        if model_name == "mistralai_mistral_nemo_example-v4" and variant_name == "unknown":
            excluded_count += 1
            continue
            
        # models vx (mixed/models)
        if model_name == "mixed/models":
            excluded_count += 1
            continue
            
        # -----------------------
            
        # Identify studies list
        studies = value.get('studies', [])
        
        for study in studies:
            entry = {
                "model": model_name,
                "variant": variant_name,
                "study_id": study.get('study_id'),
                "title": study.get('title'),
                "average_bas": study.get('pas_raw'),
                "ecs": study.get('ecs'),
                "total_output_tokens": study.get('total_tokens'),
                "total_cost": study.get('total_cost')
            }
            leaderboard_data.append(entry)
            
    print(f"Generated {len(leaderboard_data)} entries.")
    print(f"Excluded {excluded_count} model configurations (times studies).")
    
    # Sort
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
