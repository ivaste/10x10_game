# 10x10_game
....

Intuition:
- TSP where some distances are 1, other infinity
- to avoid the coming back: create a dummy point whose distances to every other points is 0. Therefore, the problem becomes an (n+1)-city symmetric TSP. After solving, just delete dummy point and then the minimum length Hamiltonian path is solved and we can get the TSP path without returning back the start point.

## Todo
- [ ] Readme
- [ ] fancier solution matrix visualization
- [ ] deploy on netlify
- [ ] better algorithm (TSP?)
