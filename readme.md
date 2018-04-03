# MishanyaSortableTable

A sortable easy-to-customize table npm module for React JS. 

## Starting up

Include it by simply pasting 

`import MishanyaSortableTable from 'mishanya-sortable-table'`

in the head of you JS file. Then initiate it anywhere in your React render method of the component.

The script iterates over the properties of objects from the `data` array to create a table. Just pass the `data` prop to the component along with `listedProps` which must be the string array with the names of the props.
 
``` 
< MishanyaSortableTable 
 	data = {[
 	  {id: 1, name: 'Billy', city: {birth: 'NY', current: 'London'}},
 	  {id: 2, name: 'Aaron', city: {birth: 'NY', current: 'Paris '}}
 	]}
 	listedProps = ['id', 'name', 'city.current']
/>
```

## Sorting
If the table has to be able to be sorted by some property/properties pass the {sortedProps} string array to it

```
< MishanyaSortableTable 
 	data = {[
 	  {id: 1, name: 'Billy', city: {birth: 'NY', current: 'London'}},
 	  {id: 2, name: 'Aaron', city: {birth: 'NY', current: 'Paris '}}
 	]}
 	listedProps = ['id', 'name', 'city.current']
 	sortedProps = ['name', 'city.current']
/>
```
You can also set the prop to be the key by default and the default sorting order

```
< MishanyaSortableTable 
 	data = {[
 	  {id: 1, name: 'Billy', city: {birth: 'NY', current: 'London'}},
 	  {id: 2, name: 'Aaron', city: {birth: 'NY', current: 'Paris '}}
 	]}
 	listedProps = ['id', 'name', 'city.current']
 	sortedProps = ['name', 'city.current']
    sortedBy    = 'name'
    order       = {true} //set true for the ascending order and false for the descending
/>
```

### Props
Properties are altogether listed below

|   Property  |    Type    |  Default  |  Required  |  Desciption |
| ----------- | ---------- | ---------- | ----------- | ----------- |
| data         | Array  | undefined  |  yes      | The array of objects to fill the table  |
| listedProps    | Array      | undefined  |yes  |  The array of strings to create columns   |
| sortedProps  | Array  |  []  |  no  | The array of strings to create sorting columns   |
| titles  | Array  |  undefined  |  no  |  The array of strings to create  columns titles in thead->th   |
| sortedBy  | String  | undefined  | no  | The default sorting key like 'name', 'city.current' etc  |
| order  | Boolean  | false  | no  | The order of sorting (true for ascending order and false for descending)  |
| onSort  | Function  | undefined  | no  | The callback function being called after every click on Sort button. The args are: e, order, prop |
| order  | Boolean  | false  | no  | The order of sorting (true for ascending order and false for descending)  |
|&nbsp;|
| wrapperClass  | String  | 'mishanya-sortable-table__wrapper'  |  no   | The CSS class for the div wrapping the table |
| tableClass  | String  | 'mishanya-sortable-table__table'  |  no   | The CSS class for the table |
| theadClass  | String  | 'mishanya-sortable-table__thead'  |  no   | The CSS class for the thead |
| tbodyClass  | String  | 'mishanya-sortable-table__tbody'  |  no   | The CSS class for the tbody |
| trClass        | String  | 'mishanya-sortable-table__tr'  |  no   | The CSS class for the tbody tr|
| thClass         | String  | 'mishanya-sortable-table__th'  |  no   | The CSS class for the th|
| tdClass       | String  | 'mishanya-sortable-table__td'  |  no   | The CSS class for the td|
| sortableClass  | String  | 'mishanya-sortable-table__sortable'  |  no   | The CSS class for the sortable column head th |
| sortedThClass  | String  | 'mishanya-sortable-table__sorted'  |  no   | The CSS class for the th which was clicked to sort by her prop |
| sortableClass  | String  | 'mishanya-sortable-table__sortable'  |  no   | The CSS class for the sortable column head th |
| sortableClass  | String  | 'mishanya-sortable-table__sortable'  |  no   | The CSS class for the sortable column head th |
| sortableClass  | String  | 'mishanya-sortable-table__sortable'  |  no   | The CSS class for the sortable column head th |
| sortArrowClass  | String  | 'mishanya-sortable-table__arrow'  |  no   | The sorting symbol class. Adds '_up' when order is acs and 'down' by default to your class  |
