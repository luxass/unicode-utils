# Test Notes

Living document for tracking issues, observations, and things to review during integration testing.

---

## TODO: Manual review needed

- [ ] Verify section names are correct for multi-section files (ArabicShaping, PropertyValueAliases)
- [ ] Verify field names match expected output for each of the 20 file parsers
- [ ] Verify @missing annotation expansion produces correct synthetic records
- [ ] Verify round-trip (parse → stringify → re-parse) preserves data
- [ ] Verify boundary/comment structure inside SectionNode.children is correct
- [ ] Check NamesList.txt tab-separated parsing works correctly
- [ ] Check files without sections (comment-only files like ReadMe.txt)

## Observations

- `NamedSequencesProv.txt` has 0 data lines in v16.0.0 — comment-only file, produces no sections
- `ReadMe.txt` has 2 plain-text lines at the end that get parsed as data — produces a section. This is technically correct (they're not comments) but worth noting.
- `DoNotEmit.txt` has data lines despite the name — it's a real data file
