<!-- prettier-ignore -->
# promise-sequence

| 1-chain | 2-recursion | 3-forEach | 4-reduce | 5-async-wait |
| ------- | ----------- | --------- | -------- | ------------ |

| ode .\1-chain.js

> > > playing episode 1: Openings
> > > synopsis: Sent to an orphanage at age 9, Beth develops an uncanny knack for chess and a growing dependence on the green tranquilizers given to the children.  
> > > [promise#1 pending]
> > > [promise#2 pending]
> > > [promise#3 pending]
> > > [promise#4 pending]
> > > [promise#5 pending]
> > > [promise#6 pending]
> > > [promise#7 pending]
> > > finished episode 1
> > > [promise#1 fulfilled]
> > > [enqueue microtask#1]

[microtask#1 start]

> > > playing episode 2: Exchanges
> > > synopsis: Suddenly plunged into a confusing new life in suburbia, teenage Beth studies her high school classmates and hatches a plan to enter a chess tournament.
> > > [promise#8 pending]
> > > [promise#9 pending]
> > > [microtask#1 exit]
> > > finished episode 2
> > > [promise#8 fulfilled]
> > > [enqueue microtask#8]

[microtask#8 start]
[promise#2 fulfilled]
[enqueue microtask#2]
[promise#9 fulfilled]
[microtask#8 exit]

[microtask#2 start]
[promise#3 rejected]
[enqueue microtask#3]
[microtask#2 exit]

[microtask#3 start]
[promise#4 rejected]
[enqueue microtask#4]
[microtask#3 exit]

[microtask#4 start]
[promise#5 rejected]
[enqueue microtask#5]
[microtask#4 exit]

[microtask#5 start]
[promise#6 rejected]
[enqueue microtask#6]
[microtask#5 exit]

[microtask#6 start]
[promise#7 rejected]
[microtask#6 exit] | | | | |
