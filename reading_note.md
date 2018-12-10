# Reading Notes of "Refactoring (2nd Edition)" Chapter 3-4

- Date: 2018/12/10
- Chapter 3, N pages, (pX-Y)
- Chapter 4, N pages, (pX-Y)

## Contents

### Chapter 3 Bad Smells in Code

- Mysterious Name
- Duplicated Code
- Long Function
- Long Parameter List
- Global Data
- Mustable Data
- Divergent Change
- Shotgun Surgery
- Feature Envy
- Data Clumps
- Primitive Obsession
- Repeated Switches
- Loops
- Lazy Element
- Speculative Generality
- Temporary Field
- Message Chains
- Middle Man
- Insider Trading
- Large Class
- Alternative Classes with Different Interfaces
- Data Class
- Refuced Bequest
- Comments

### Chapter 4 Building Tests

- The Value of Self-Testing Code
- Sample Code to Test
- A First Test
- Add Another Test
- Modifying the Fixture
- Probing the Boundaries
- Much More Than This

## Keywords

- delegation

## Impressions

I like the way of naming some bad smells in code (e.g. "Insider Trading", "Shotgun Surgery")

### In Ruby & RoR

I think that Ruby & RoR code often tends to have "Middle Man" cases due to `delegetes` (in Rails API) or `def_delegators` (in `Forwardable` module) methods. This is an useful method and I like it, but sometimes "too much delegation" can be found.

## Summary / Overview

- 

## Discussion Points

- How was your impressions about chapter 3 & 4?
- Did you have any interesting experiences of "Bad Smells" to share?



## References

- http://wiki.c2.com/?CodeSmell
  - more "bad smells"
    - e.g. "SameNameDifferentMeaning", "InstanceofInConditionals", etc
    - ["Boredom Is A Smell"](http://wiki.c2.com/?BoredomIsaSmell)
      - I completely aggree :innocent: