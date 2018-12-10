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

- code smells / bad smells in code
- delegation
- self-testing code

## Impressions

I like the way of naming some bad smells in code (e.g. "Insider Trading", "Shotgun Surgery")

### "Bad Smells" and Language/Framework Specification

I think that the language and ramework specification heavily affects which bad practices to come in to codes.

For example, is you are writing an old (I mean, pre-ES5) JavaScript, you may often find "Global Data". JavaScript then does not support Class, so the glocal scope can be easily written.

For another example, Ruby & RoR codes often tend to have "Middle Man" cases due to `delegetes` (in Rails API) or `def_delegators` (in `Forwardable` module) methods. This is an useful method and I like it, but sometimes "too much delegation" can be found.

## Summary / Overview

Chapter 3 summarizes up the list of "bad smells" in code. This chapter is kind of catalogue of bad practices code examples. These "bad sells" are exactly what you are going to "refactor". Having a good sense of smell might be one of qualifications for being a good engineer.

Chapter 4 says how important it is to have tests before refactoring, and then describes how to write tests spep by step. This chapter looks like any other TDD book (e.g. ["Test Driven Development"](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530) by Kent Beck), and readers who have expericense in TDD or already have the skills can skip this chapter.

## Discussion Points

- How was your impressions about chapter 3 & 4?

- Do you have any interesting experiences of "Bad Smells" to share?

- Do you have any experiences for finding bugs (and how to fix it) to share?

  - (p.85) *"Every programmer can tell a story of a bug that took a whole day (or more) to find"*

- Do you have any policy/rules/opinions about writing tests?

  - When to write tests, Why you write tests, Which tests you prefer, a believer of TDD, etc...

- Which one prefer "assert" or "expect" style? 

  - I wonder, this questions is simply about pure likes and tastes, or not.


## References

- http://wiki.c2.com/?CodeSmell
  - more "bad smells"
    - e.g. "SameNameDifferentMeaning", "InstanceofInConditionals", etc
    - ["Boredom Is A Smell"](http://wiki.c2.com/?BoredomIsaSmell)
      - I completely agree :innocent: