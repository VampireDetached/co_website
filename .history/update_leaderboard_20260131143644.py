import json

new_data = [
  {
    "model": "anthropic/claude-haiku-4.5",
    "variant": "v1_empty",
    "study_id": "study_001",
    "average_bas": 0.0022,
    "ecs": -0.0434,
    "total_output_tokens": 433076,
    "total_cost": 0.5955
  },
  {
    "model": "anthropic/claude-haiku-4.5",
    "variant": "v1_empty",
    "study_id": "study_002",
    "average_bas": 0.9395,
    "ecs": 0.1581,
    "total_output_tokens": 724265,
    "total_cost": 1.1292
  },
  {
    "model": "anthropic/claude-haiku-4.5",
    "variant": "v1_empty",
    "study_id": "study_003",
    "average_bas": 0.0649,
    "ecs": 0.6750,
    "total_output_tokens": 443677,
    "total_cost": 1.4588
  },
  {
    "model": "anthropic/claude-haiku-4.5",
    "variant": "v1_empty",
    "study_id": "study_004",
    "average_bas": 0.3939,
    "ecs": 0.0564,
    "total_output_tokens": 1022476,
    "total_cost": 1.5251
  },
  {
    "model": "anthropic/claude-haiku-4.5",
    "variant": "v1_empty",
    "study_id": "study_005",
    "average_bas": 0.9995,
    "ecs": 0.0152,
    "total_output_tokens": 81291,
    "total_cost": 0.2186
  },
  {
    "model": "anthropic/claude-haiku-4.5",
    "variant": "v1_empty",
    "study_id": "study_006",
    "average_bas": 0.0735,
    "ecs": 0.2136,
    "total_output_tokens": 342350,
    "total_cost": 0.4397
  },
  {
    "model": "anthropic/claude-haiku-4.5",
    "variant": "v1_empty",
    "study_id": "study_007",
    "average_bas": 0.1848,
    "ecs": -0.6979,
    "total_output_tokens": 101075,
    "total_cost": 0.1252
  },
  {
    "model": "anthropic/claude-haiku-4.5",
    "variant": "v1_empty",
    "study_id": "study_008",
    "average_bas": 0.0021,
    "ecs": "N/A",
    "total_output_tokens": 171657,
    "total_cost": 0.4876
  },
    {
    "model": "anthropic/claude-haiku-4.5",
    "variant": "v1_empty",
    "study_id": "study_009",
    "average_bas": 0.9522,
    "ecs": 0.3550,
    "total_output_tokens": 1021518,
    "total_cost": 2.1051
  },
    {
    "model": "anthropic/claude-haiku-4.5",
    "variant": "v1_empty",
    "study_id": "study_010",
    "average_bas": 0.0011,
    "ecs": -0.3098,
    "total_output_tokens": 139764,
    "total_cost": 0.4189
  },
    {
    "model": "anthropic/claude-haiku-4.5",
    "variant": "v1_empty",
    "study_id": "study_011",
    "average_bas": 0.0034,
    "ecs": 0.0173,
    "total_output_tokens": 132465,
    "total_cost": 0.3775
  },
    {
    "model": "anthropic/claude-haiku-4.5",
    "variant": "v1_empty",
    "study_id": "study_012",
    "average_bas": 0.0318,
    "ecs": -0.3676,
    "total_output_tokens": 124203,
    "total_cost": 0.4065
  }
]

file_path = 'data/leaderboard.json'
with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Append new data
data.extend(new_data)

with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print("Leaderboard updated successfully.")
