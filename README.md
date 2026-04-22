# League Table

Repository layout:

- `angularleaguetable.sln` - .NET solution
- `angularleaguetable/` - ASP.NET Core backend + Angular client
- `angularleaguetable/ClientApp` - Angular frontend
- `angularleaguetable.Tests/` - backend unit tests

## Prerequisites

- .NET SDK `9.0.313` (pinned in `global.json`)
- Node.js `20.x` (pinned in `.nvmrc`)

## Local setup

```bash
dotnet restore angularleaguetable.sln
dotnet build angularleaguetable.sln
dotnet test angularleaguetable.sln
```

```bash
cd angularleaguetable/ClientApp
npm ci
npm test -- --watch=false --browsers=ChromeHeadless
npm run build
```

## CI

GitHub Actions workflow: `.github/workflows/ci.yml`

It runs:

- .NET restore, build, and tests
- Frontend dependency install (`npm ci --legacy-peer-deps`)

Note: frontend `ng test`/`ng build` are intentionally not CI-gated yet because the current Angular dependency/tooling matrix is incompatible. This is addressed in the Angular alignment migration phase.
