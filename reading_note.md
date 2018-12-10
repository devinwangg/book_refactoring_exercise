# Reading Notes of "Refactoring (2nd Edition)" Chapter 3-4

- Date: 2018/12/10
- Chapter 3, N pages, (pX-Y)
- Chapter 4, N pages, (pX-Y)

## Contents

### Chapter 3 Bad Smells in Code

- Mysterious Name
  - *Change Function Declaration / Rename Variable / Rename Field*
- Duplicated Code
  - *Extract Function / Slide Statements / Pull Up Method*
- Long Function
  - *Extract Function / Replace Temp with Query / Introduce Parameter Object / Preserve Whole Object / Replace Function with Command*
- Long Parameter List
  - *Replace Parameter with Query / Preserve Whole Object / Introduce Parameter Object / Remove Flag Argument / Combine Functions into Class*
- Global Data
  - *Encapsulate Variable*
- Mutable Data
  - *Encapsulate Variable / Split Variable / Slide Statements / Extract Function / Separate Query from Modifier / Remove Setting Method / Replace Derived Variable with Query / Combine Functions into Class / Conbine Functions into Transform / Change Reference to Value*
- Divergent Change
  - *Split Phase / Move Function / Extract Function / Extract Class*
- Shotgun Surgery
  - *Move Functin / Move Field / Combine Functions into Class / Combine Functions into Transform / Split Phase / Inline Function / Inline Class*
- Feature Envy
  - *Move Function / Extract Function*
- Data Clumps
  - *Extract Class / Introduce Parameter Object / Preserve Whole Object*
- Primitive Obsession
  - *Replace Primitive with Object / Replace Type Code with Subclasses / Replace Conditional with Polymorphysm / Extract Class / Introduce Parameter Object*
- Repeated Switches
  - *Replace Conditional with Polymorphism*
- Loops
  - *Replace Loop with Pipeline*
- Lazy Element
  - *Inline Function / Inline Class / Collapse Hierarchy*
- Speculative Generality
  - Is it like YAGNI?
  - *Collapse Hierarchy / Inline Function / Inline Class / Change Function Declaration / Remove Dead Code*
- Temporary Field
  - *Extract Class / Move Function / Introduce Special Case*
- Message Chains
  - *Hide Delegate / Extract Function / Move Function*
- Middle Man
  - *Remove Middle Man / Inline Function / Replace Superclass with Delegate / Replace Subclass with Delegate*
- Insider Trading
  - *Move Function / Move Field / Hide Delegate / Replace Subclass with Delegate / Replace Superclass with Delegate*
- Large Class
  - *Extract Class / Extract Superclass / Replace Type Code with SUbclasses*
- Alternative Classes with Different Interfaces
  - *Chhange Function Declaration / Move Function / Extract Superclass*
- Data Class
  - *Encapsulate Record / Remove Setting Method / Move Function / Extract Function / Split Phase*
- Refuced Bequest
  - *Replace Subclass with Delegate / Replace Superclass with Delegate*
- Comments
  - *Extract Function / Change Function Declaration / Introduce Assertion*

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

I like the way of naming some bad smells in code (e.g. "Insider Trading", "Shotgun Surgery", "Refuced Bequest", etc.)

### "Bad Smells" and Language/Framework Specification

I think that the language and ramework specification heavily affects which bad practices to come in to codes.

For example, is you are writing an old (I mean, pre-ES5) JavaScript, you may often find "Global Data". JavaScript then does not support Class, so the glocal scope can be easily written.

For another example, Ruby & RoR codes often tend to have "Middle Man" cases due to `delegetes` (in Rails API) or `def_delegators` (in `Forwardable` module) methods. This is an useful method and I like it, but sometimes "too much delegation" can be found.

### About Tests

IMO, this is exactly how I decide when to write tests. If I feel confidence (and there is no team's rule to force me to write tests), I rather write slim tests. If I feel un-confidence then I spend much more time on writing tests.

> (p. 100) The best measure for a good enough test suite is subjective: How confident are you that if someone introduces a defect into the code, some test will fail?

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