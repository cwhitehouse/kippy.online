# Technical Design

Single-file change: add an Orkestra project object to the `projects` array in `src/pages/projects.astro`. The pattern is fully established by the two existing entries. The `ProjectStub` component accepts `title`, `description`, `tech`, `image`, `github`, `npm`, `website`, and `idx`. For Orkestra, `image`, `github`, and `npm` will be `null`.