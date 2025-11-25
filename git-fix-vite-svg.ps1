# PowerShell script to fix git cherry-pick conflict and push vite.svg file
try {
    git cherry-pick --abort
} catch {
    Write-Host "No cherry-pick in progress or abort failed, continuing..."
}

# Add vite.svg file (make sure conflict is resolved manually first if needed)
git add client/public/vite.svg

# Commit the added file with a message
git commit -m "Resolve vite.svg conflict and update logo"

# Pull latest changes from remote main branch with rebase
git pull --rebase origin main

# Push changes to remote main branch
git push origin main
