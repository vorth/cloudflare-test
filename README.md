# Raising Butterflies, migrated to Eleventy

### Commands Applied

To find all the species specific pages of butterflies:
```bash
pup --color -f scraped/www.raisingbutterflies.org/raising_butterflies_301/index.html '#content a attr{href}' > species-list.txt
```
The resulting `species-list.txt` was then cleaned up manually, removing duplicates and irrelevant or broken link URLs.

Note: the full list of species on that page includes a lot of non-links, species for which there is no page.

