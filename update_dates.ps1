# Update project durations to Aug 2024 - Apr 2025 timeframe
$content = Get-Content -Path projects.html

# Update specific date ranges
$content = $content -replace "Jan 2023 - Mar 2023", "Aug 2024 - Sep 2024"
$content = $content -replace "Jul 2022 - Oct 2022", "Sep 2024 - Nov 2024" 
$content = $content -replace "Feb 2023 - Apr 2023", "Nov 2024 - Dec 2024"
$content = $content -replace "Nov 2022 - Jan 2023", "Dec 2024 - Jan 2025"
$content = $content -replace "Mar 2023 - May 2023", "Jan 2025 - Feb 2025"
$content = $content -replace "Jun 2022 - Aug 2022", "Oct 2024 - Dec 2024"
$content = $content -replace "Sep 2022 - Dec 2022", "Nov 2024 - Jan 2025"
$content = $content -replace "Oct 2022 - Jan 2023", "Dec 2024 - Feb 2025"
$content = $content -replace "Feb 2023 - Apr 2023", "Jan 2025 - Mar 2025"
$content = $content -replace "Dec 2022 - Feb 2023", "Feb 2025 - Apr 2025"
$content = $content -replace "Jun 2023 - Aug 2023", "Sep 2024 - Nov 2024"
$content = $content -replace "Apr 2023 - Jun 2023", "Jan 2025 - Mar 2025"
$content = $content -replace "Dec 2022", "Dec 2024"
$content = $content -replace "Aug 2022 - Nov 2022", "Oct 2024 - Jan 2025"
$content = $content -replace "Mar 2023 - May 2023", "Feb 2025 - Apr 2025"
$content = $content -replace "Nov 2022 - Jan 2023", "Mar 2025 - Apr 2025"

# Update all other "2023" only durations (spread them across the timeframe)
$content = $content -replace '<p class="project-duration">2023</p>', '<p class="project-duration">Sep 2024 - Apr 2025</p>'

# Save the updated content back to the file
$content | Set-Content -Path projects.html

Write-Host "All project durations updated to Aug 2024 - Apr 2025 timeframe." 