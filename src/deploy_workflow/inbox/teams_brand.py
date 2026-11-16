"""The Credit OS header of a Teams card, as two inline PNGs: a card carries its own images
because the service has no public address for Teams to fetch them from. Drawn from
docs/design/mockups/teams-cards.html: BAND is the navy field with the symbol's wave (640 by
56), LOCKUP the symbol tile and the app name in the display face (236 by 56, shown at 28px
high). Together about 2.5 KB of a card's roughly 25 KB limit."""

BAND = "data:image/png;base64," + (
    "iVBORw0KGgoAAAANSUhEUgAAAoAAAAA4BAMAAACf5VQhAAAAMFBMVEUADo8ADo0ADYsADYYADIAAC3gAC3EACmsA"
    "CmUACV4AB1EAB0oAB0YABkEABTkABTMCDE7hAAABIklEQVR42u3aMQ6CMBTG8RY5AIS41xidCYm7JBp1NAGJB5AL"
    "GPUIOuiqg/fQxYsYF2+iRzBCYeD9v5m2yY/Ha9OgP6qR6bz/e352NsUWchRRyj3dTNGh6Ck1vZjCY6lA5R7vxf0A"
    "1MvXuhS/cL/+YV5uAtkV2L4+52UbgGC+1m7jle+ggvfefWhjC5K6d2R5bGcPF8nnZPnQ1iFIYu/L89DaZPIA3e3K"
    "2JxOGN8kSTy770OS3iBNjfWCFqPXS8ZxFR1BSO2NKtGTABhE3agbeZXNrxt6I73wtef7flAhXbMB6zuTQwAggAAC"
    "SAAEEEAACYAAAgggAbDGNPVC9VHXQppffPmE6YEAAkgABBBAAAmAAAIIIAEQQAABJAACCCCA5Fe+w1Uchfbg8xIA"
    "AAAASUVORK5CYII="
)

LOCKUP = "data:image/png;base64," + (
    "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"
)
