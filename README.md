# 10x10_game
....

Intuitions:
- Can be seen as a graph where each cell is a node
- each cell is connected with only 8 specific cells in their sorroundings (except those one in the borders that have less connections), the edge cost is 1.
- Solve as the TSP
- to avoid the coming back edge of the TSP: create a dummy point whose distances to every other points is 0. Therefore, the problem becomes an (n+1)-city symmetric TSP. After solving, just delete dummy point and then the minimum length Hamiltonian path is solved and we can get the TSP path without returning back the start point.

## Todo
- [ ] Readme
- [ ] fancier solution matrix visualization
- [ ] deploy on netlify
- [ ] better algorithm (TSP?)
- [ ] modifyable rules: make the user choose the horizontal/vertical and diagonal distance
