# Image Generator

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

API:
- `/` Generate vacansion image
  
  Qery params:
  - `title` - Title vacansion (not requred)
  - `location` - Location vacansion (not requred)
  - `amount` - Price vacansion (not requred)
  - `currency` - Currency vacansion (not requred)

- `/svg` Generate image with svg url
  
  Qery params:
  - `url`* - Url for download svg (requred)
  - `width` - Parameter for resize (not requred)

- `/avatar` Generate avatar with name
  
  Qery params:
  - `name`* - Name for generate hash summ (requred)
  - `style` - One of `'beam', 'marble', 'pixel', 'sunset', 'ring', 'bauhaus'`(not requred) Default: `beam`