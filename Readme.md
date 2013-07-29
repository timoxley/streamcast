Coerce all stream data to a particular type.


## Example

```
# Cast all comma separated input to integers
> echo 1.2,2.5,3.9,4.1,500 | ./bin/streamcast --delimiter , integer 
1
3
4
4
500
```


```js

// Also supports 'smart' data types.
pull(
  pull.values([0, '90', 359, '360']),
  streamcast('degrees'), // as in a compass
  pull.collect(function(err, array) {
    console.log(array) // => [0, 90, 359, 0]  // note 360 -> 0
  })
)
```
