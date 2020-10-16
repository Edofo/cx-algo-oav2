## Hello, Sort

## <a name='TOC'>🐼 Summary</a>

- [Rules](#rules)
- [Overview](#overview)
- [Exercises](#exercises)
- [Credits](#credits)

## <a name='overview'>🦊 Rules</a>

Hi, here are some rules to carry out this story oav;

- You **MUST** create a git repository named `cx-algo-oav2`
- You **MUST** create a file called `.author` with your firstname and lastname followed by a newline.
- You **MUST** create a file for each exercises **e01.js**, **e02.js**, etc

```sh
~/fp-exercises ❯❯❯ cat -e .author
Majdi Toumi$
```

> Of course, you can talk about the subject with other developers, peer-learning is
> the key to be a better developer. Don't hesitate to ask questions or help people on slack.

> Don't forget, there is no useless question :-)

- You **MUST** return all exercises before Friday October, 16 at 16:00
- You **MUST** add `pu-erh` user as a collaborator.
- YOU **MUST** define all functions signature by yourself :)

## <a name='overview'>🐱 Overview</a>

The purpose of theses exercises is simple : resolve basic algorithm functions.

## <a name='steps'>🐨 Steps</a>

### 01 Bubble sorting

The idea is to move the largest items to the end of the list by moving them as follows:

- We consider the first element of our list and compare it to the second. If it is larger, they are inverted.
- We now consider the second element and compare it to the third. If it is larger, they are inverted.
- We continue like this until we get to the end of the list. At this stage, we necessarily put the largest element at the end of the list.
- We start the first 3 steps again but this time going only to the penultimate position (since the largest is already in the last position)
- We continue in this way by decreasing each time the place where we stop the comparisons.
- This sorting is called bubbles because at each step, we bring up the largest "bubble" towards the end of the list.

For perhaps clearer explanations and examples we can go to [Wikipedia](https://fr.wikipedia.org/wiki/Tri_%C3%A0_bulles#Exemple_%C3%A9tape_par_%C3%A9tape)

The goal of this exercise is to make a program that sorts a list using bubble sort.

`INITIAL ARRAY -> [FUNCTION] -> NEW ARRAY`

### 02 Sort by insertion

Insertion sorting is similar to the way we put cards in our hands when playing.<br />
When we add a card to a hand already sorted, we insert it directly in its place and we repeat the operation for each card to add to our hand.<br />

The idea of ​​sorting by insertion is the same:

- We start with the second element of the list. We put it aside (in a variable). If it is smaller than the first, we put the first in place of the second and the second (which was saved in a variable) in place of the first.
- We now consider the third element. We put it aside in a variable. If it is smaller than the second, we put the second in place of the third. If it is smaller than the first, we put the first in place of the second.
- So on, by shifting each time by one notch to the right all the elements which are larger than the element considered.

You can find explanations and examples on [Wikipedia](https://fr.wikipedia.org/wiki/Tri_par_insertion)

`INITIAL ARRAY -> [FUNCTION] -> NEW ARRAY`

### 03 (bonus) Sorting by selection

Sorting by selection consists of finding the smallest element in the list and placing it first, then finding the smallest among those that remain and placing it second etc.

You can find explanations and examples on [Wikipedia](https://fr.wikipedia.org/wiki/Tri_par_s%C3%A9lection)

`INITIAL ARRAY -> [FUNCTION] -> NEW ARRAY`

## <a name='credits'>🐵 Credits</a>

Craft with :heart: in **Paris**.
