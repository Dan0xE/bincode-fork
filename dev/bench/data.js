window.BENCHMARK_DATA = {
  "lastUpdate": 1767466394132,
  "repoUrl": "https://github.com/Dan0xE/BincodeF",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "danopperm@gmail.com",
            "name": "Daniel Oppermann",
            "username": "Dan0xE"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c750762cce1047fbf2f73d6521f5ab0460d6abfc",
          "message": "chore: raise MSRV & fix workflows (#9)\n\n* ci: fix workflows & add benchmark workflow\n\n* chore: raise MSRV to rustc `1.86`\n\n* fix: attempt to fix benchmark workflow\n\n* fix: allow(dead_code)\n\n* chore: bump edition to 2024\n\n* fix: `gen` keyword is now reserved\n\n* fix: workflow triggers\n\n* fix: path to README\n\n* refactor: track historical benchmark data",
          "timestamp": "2026-01-03T19:37:14+01:00",
          "tree_id": "b4db31ae3f66137615f10885b07b05f630591f63",
          "url": "https://github.com/Dan0xE/BincodeF/commit/c750762cce1047fbf2f73d6521f5ab0460d6abfc"
        },
        "date": 1767465672177,
        "tool": "cargo",
        "benches": [
          {
            "name": "inline_decoder_claim_bytes_read",
            "value": 37951,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench v1",
            "value": 69237,
            "range": "± 713",
            "unit": "ns/iter"
          },
          {
            "name": "bench v2 (standard)",
            "value": 70085,
            "range": "± 817",
            "unit": "ns/iter"
          },
          {
            "name": "bench v2 (legacy)",
            "value": 71262,
            "range": "± 614",
            "unit": "ns/iter"
          },
          {
            "name": "bench v1 decode",
            "value": 282070,
            "range": "± 751",
            "unit": "ns/iter"
          },
          {
            "name": "bench v2 decode (legacy)",
            "value": 301540,
            "range": "± 835",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u8",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u16",
            "value": 20937,
            "range": "± 299",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u32",
            "value": 19991,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u64",
            "value": 23106,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u8",
            "value": 333,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u16",
            "value": 25106,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u32",
            "value": 25432,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u64",
            "value": 25620,
            "range": "± 29",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "danopperm@gmail.com",
            "name": "Daniel Oppermann",
            "username": "Dan0xE"
          },
          "committer": {
            "email": "danopperm@gmail.com",
            "name": "Daniel Oppermann",
            "username": "Dan0xE"
          },
          "distinct": true,
          "id": "a3a6b1c711c57484d63c61586429e4dfc497fd82",
          "message": "chore: merge main",
          "timestamp": "2026-01-03T19:49:27+01:00",
          "tree_id": "3bea13de93709f1b5fa8a42b52d1c3d803a6c9cd",
          "url": "https://github.com/Dan0xE/BincodeF/commit/a3a6b1c711c57484d63c61586429e4dfc497fd82"
        },
        "date": 1767466393601,
        "tool": "cargo",
        "benches": [
          {
            "name": "inline_decoder_claim_bytes_read",
            "value": 44929,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "bench v1",
            "value": 48169,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "bench v2 (standard)",
            "value": 54464,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "bench v2 (legacy)",
            "value": 47582,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "bench v1 decode",
            "value": 262751,
            "range": "± 3932",
            "unit": "ns/iter"
          },
          {
            "name": "bench v2 decode (legacy)",
            "value": 278885,
            "range": "± 1435",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u8",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u16",
            "value": 14052,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u32",
            "value": 18759,
            "range": "± 959",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u64",
            "value": 21852,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u8",
            "value": 3122,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u16",
            "value": 14947,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u32",
            "value": 19900,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u64",
            "value": 29457,
            "range": "± 79",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}