import json
import csv
import re
import os

# Define the input CSV file path and output JSON path
csv_file_path = r'd:\Desktop\HS_bench-dev\results\benchmark\simple_studies.csv'
json_file_path = r'd:\Desktop\website_co\co_site\data\leaderboard.json'

# Function to parse model and variant from the combined string
def parse_model_variant(combined_name):
    # Regex to find the variant starting with _v followed by numbers
    # Expecting format like model_name_v1-variant or model_name_v1
    match = re.search(r'^(.*)_(v\d+.*)$', combined_name)
    if match:
        model_part = match.group(1)
        variant_part = match.group(2)
        
        # Format model: assume first part before _ is provider
        if '_' in model_part:
            parts = model_part.split('_', 1)
            provider = parts[0]
            name = parts[1].replace('_', '-') # Replace remaining underscores with dashes for cleaner look?
            
            # Special handling for known providers to match previous style if possible
            # But simple rule: provider/name
            model_formatted = f"{provider}/{name}"
        else:
            model_formatted = model_part
            
        # Format variant: standard uses underscores in JSON based on previous file
        variant_formatted = variant_part.replace('-', '_')
        
        return model_formatted, variant_formatted
    else:
        # Fallback if pattern doesn't match
        return combined_name, "unknown"

# Read parsing CSV
new_entries = []

if os.path.exists(csv_file_path):
    print(f"Reading CSV from {csv_file_path}")
    with open(csv_file_path, 'r', encoding='utf-8') as f:
        # Check if header exists
        content = f.read()
        lines = content.strip().split('\n')
        
        for line in lines:
            line = line.strip()
            if not line: continue
            
            # Simple CSV parsing (assuming no commas in fields except title which might be quoted?)
            # The structure seems simple enough, but title has commas sometimes? 
            # Use csv module for robustness
            pass
            
    # Re-open with csv module
    with open(csv_file_path, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        for row in reader:
            if not row or len(row) < 7: continue
            
            # Check if it's a header row
            if row[0] == 'model' or 'PAS' in row:
                continue

            # Columns: 
            # 0: Model_Variant, 1: StudyID, 2: Title, 3: PAS, 4: ECS, 5: Tokens, 6: Cost
            
            model_variant_str = row[0]
            study_id = row[1]
            title = row[2]
            pas_str = row[3]
            ecs_str = row[4]
            tokens_str = row[5]
            cost_str = row[6]
            
            model, variant = parse_model_variant(model_variant_str)
            
            # Clean values
            try:
                average_bas = float(pas_str) if pas_str else 0.0
            except:
                average_bas = 0.0
                
            try:
                total_tokens = int(float(tokens_str)) if tokens_str else 0
            except:
                total_tokens = 0
                
            try:
                total_cost = float(cost_str) if cost_str else 0.0
            except:
                total_cost = 0.0
            
            ecs_val = "N/A"
            if ecs_str and ecs_str.strip():
                try:
                    ecs_val = float(ecs_str)
                except:
                    pass
            
            entry = {
                "model": model,
                "variant": variant,
                "study_id": study_id,
                "average_bas": average_bas,
                "ecs": ecs_val,
                "total_output_tokens": total_tokens,
                "total_cost": total_cost,
                # "findings_breakdown": {} # Not provided in CSV
            }
            new_entries.append(entry)
else:
    print(f"Error: CSV file node found at {csv_file_path}")
    exit(1)

print(f"Parsed {len(new_entries)} entries.")

# Load existing JSON
existing_data = []
if os.path.exists(json_file_path):
    with open(json_file_path, 'r', encoding='utf-8') as f:
        try:
            existing_data = json.load(f)
        except:
            existing_data = []

# Merge Strategy:
# Create a map key: model|variant|study_id -> entry
data_map = {}

# Keep existing data first? Or clear it? 
# The user said "put the corresponding data", and "strictly according to the real data of this file".
# I will upsert. If the CSV has data, it overwrites existing. 
# If the CSV doesn't have it, keep existing (unless I should clear unrelated stuff, but usually safe to keep).

for entry in existing_data:
    key = f"{entry.get('model')}|{entry.get('variant')}|{entry.get('study_id')}"
    data_map[key] = entry

# Update with new data
for entry in new_entries:
    # Normalize keys? The script parsing logic generates specific formatted keys.
    # Existing keys might differ slightly.
    # However, since I am generating fresh entries for these models, I'll insert them.
    # If the formatting matches, it updates.
    
    key = f"{entry['model']}|{entry['variant']}|{entry['study_id']}"
    
    # Preserve findings_breakdown if it exists in old entry and not in new?
    # The new CSV doesn't have findings_breakdown. I should try to keep it if possible?
    # But usually findings_breakdown is tied to the result. If result changes, breakdown might be invalid.
    # I'll let it be missing or copy if values are identical (unlikely).
    # Since I don't have breakdown in CSV, I will omit it for updated entries.
    
    data_map[key] = entry

# Convert back to list
final_data = list(data_map.values())

# Write back
with open(json_file_path, 'w', encoding='utf-8') as f:
    json.dump(final_data, f, indent=2)

print("Leaderboard updated successfully.")
