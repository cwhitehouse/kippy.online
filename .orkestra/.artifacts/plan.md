## Summary

Add an "Orkestra" placeholder project entry to the personal projects page. Orkestra is an agentic orchestration tool that will eventually live at orkestra.codes. Since the marketing site doesn't exist yet, this will be a stub entry in the existing projects list.

## Scope

**In scope:**
- Add a new project object to the `projects` array in `src/pages/projects.astro` for Orkestra
- Include appropriate title, description, tech stack, and links (only those that exist)

**Out of scope:**
- Creating a dedicated project page or route for Orkestra
- Adding any custom images or demos for Orkestra
- Changes to the `ProjectStub` component itself

## Success Criteria

- The projects page renders an "Orkestra" project card using the existing `ProjectStub` component
- The entry includes a description mentioning it's an agentic orchestration tool
- The website link points to `https://orkestra.codes`
- No GitHub/npm links are included unless provided (since it's a placeholder)
- The page builds and renders without errors

## Open Technical Questions

- None — the pattern is clear from existing project entries.
