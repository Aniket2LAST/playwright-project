# Page snapshot

```yaml
- img
- heading "Post Requirements" [level=2]
- text: Paste Requirement Basic Information Vendors
- tablist "secondary tabs example":
  - tab "Share" [selected]
  - tab "AI Recommendation":
    - img
    - text: AI Recommendation
- paragraph: "Share your requirement with:"
- radiogroup:
  - radio "Specific Vendors" [checked]
  - text: Specific Vendors
  - radio "Empaneled"
  - text: Empaneled
  - radio "Public"
  - text: Public
- text: Search vendor
- combobox "Search vendor" [expanded]
- button "Close"
- listbox "Search vendor":
  - option "Fleeksam"
  - option "Honney Software"
  - option "SK"
- button "Back"
- button "Submit" [disabled]
```