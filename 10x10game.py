def pos(r,c,n):
    return c+r*n

solution=None

def dfs(num,p,n,vec,V):
    global solution

    #base
    if solution!=None:return
    if num>n*n:
        solution=vec[:]
        return
    
    #check if the position is empty
    if vec[p]!=0:return
    vec[p]=num
    #print(" "*num,num)
    for nextpos in V[p]:
        dfs(num+1,nextpos,n,vec,V)
    
    vec[p]=0
    return






def solve(n=10):
    global solution
    N=n*n
    V=[[] for _ in range(N)]

    for r in range(n):
        for c in range(n):
            if r-3>=0: V[pos(r,c,n)].append(pos(r-3,c,n)) #up
            if r-2>=0 and c+2<n: V[pos(r,c,n)].append(pos(r-2,c+2,n))
            if c+3<n:V[pos(r,c,n)].append(pos(r,c+3,n))
            if r+2<n and c+2<n:V[pos(r,c,n)].append(pos(r+2,c+2,n))
            if r+3<n:V[pos(r,c,n)].append(pos(r+3,c,n))
            if r+2<n and c-2>=0: V[pos(r,c,n)].append(pos(r+2,c-2,n))
            if c-3>=0:V[pos(r,c,n)].append(pos(r,c-3,n))
            if r-2>=0 and c-2>=0:V[pos(r,c,n)].append(pos(r-2,c-2,n))


    vec=[0]*N
    for r in range(n):
        if solution!=None:break
        for c in range(n):
            if solution!=None:break

            dfs(1,pos(r,c,n),n,vec,V)
    
    return solution
     


n=9
ans=solve(n)
if ans==None:print("No, solution found")
else:
    for r in range(n):
        row=ans[r*n:(r+1)*n]
        print("\t".join(list(map(str,row))))




