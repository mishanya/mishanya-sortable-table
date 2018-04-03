'use strict'

import React, { Component }  from 'react'
import PropTypes             from 'prop-types';
import style                 from './style.css'

class MishanyaSortableTable extends Component {
  
  constructor(props){
  	super(props)
    this.state =   { 
      data:      props.data ,
      titles:    props.titles || Array(props.listedProps.length).fill('') ,
      sortedBy:  props.sortedBy,
      order:     props.order
    }
  }

  defineParsedProp(obj, prop){                               // Gets object's prop from the string prop chain on every iteration
    prop = prop.split('.')
    for (let i = 0; i < prop.length; i++ ){
      obj = obj[prop[i]]
    }
    return obj
  }
       
  sortTable(e, order, prop){                                   // Sorts table by prop. The prop must be parsed first
    if (!prop){
      return 0
    }
    let data = this.state.data.sort((prevItem, nextItem) => {
      let [prevProp, nextProp] = [this.defineParsedProp(prevItem, prop), this.defineParsedProp(nextItem, prop)];
        return (order) ? prevProp - nextProp : nextProp - prevProp
      }
    })
    this.setState({
      data:     data,
      order:    order,
      sortedBy: prop
    })
    if (e && this.props.onSort){
      this.props.onSort(e, order, prop)
    }
  }

  componentWillMount(){
    if (this.props.sortedBy){
      this.sortTable(null, this.props.order, this.props.sortedBy)
    }
  }

  render() {

    let thead = this.props.listedProps.map((listed, index) => {    // Creates thead row from titles array
      let  thisSorted  = this.props.sortedProps[this.props.sortedProps.indexOf(listed)]
      return (
        <th 
          onClick   = {(e) => this.sortTable(e, !this.state.order, thisSorted)}
          key       = {index}
          className = {`${this.props.thClass || 'mishanya-sortable-table__th'} ${ thisSorted ? (this.props.sortableClass || 'mishanya-sortable-table__sortable') : '' } ${this.state.sortedBy === listed ? (this.props.sortedThClass || 'mishanya-sortable-table__sorted') : ''}`}>
          {this.state.titles[index]}
          {
            thisSorted &&
              <div className={`${this.props.sortArrowClass || 'mishanya-sortable-table__arrow'}${(this.state.order && this.state.sortedBy == thisSorted) ? '_up' : '_down'}`}/>
          }
        </th> 
      )
    }),
    tbody = this.state.data.map((item, index) => {
      return (
        <tr key={index} className={this.props.trClass || 'mishanya-sortable-table__tr'}>
          { 
            this.props.listedProps.map((prop, i) => {
              return (
                <td key={i} className={this.props.tdClass || 'mishanya-sortable-table__td'}>
                  {this.defineParsedProp(item, prop).toString()}
                </td>
              )
            }) 
          }
        </tr>
      )
    })


    return (
      <div className={this.props.wrapperClass || 'mishanya-sortable-table__wrapper'}>
        <table className={this.props.tableClass || 'mishanya-sortable-table__table'}>
          <thead className={this.props.theadClass || 'mishanya-sortable-table__thead'}>
            <tr >
               {thead}
            </tr>
          </thead> 
          <tbody className={this.props.tbodyClass || 'mishanya-sortable-table__tbodyClass'}>
            {tbody}
          </tbody>       
        </table>
      </div>
    )
  }
}



export default MishanyaSortableTable


MishanyaSortableTable.propTypes = {
  data:             PropTypes.arrayOf(PropTypes.object).isRequired,
  listedProps:    PropTypes.arrayOf(PropTypes.string).isRequired,
  sortedProps:    PropTypes.arrayOf(PropTypes.string),
  titles:         PropTypes.arrayOf(PropTypes.string),
  lengthEquality: (props) => {
    return (props.titles && Array.isArray(props.titles) && props.listedProps.length !== props.titles.length)
    ? new Error('Titles and listedProps length must be equal. Please fill up the titles array with an empty string if you don\'t need a title for some column')
    : null 
  }, 
  order:          PropTypes.bool,
  defaultSorted:  PropTypes.string,
  sortedBy:       PropTypes.string,
  sortArrowClass: PropTypes.string,
  wrapperClass:   PropTypes.string,
  tableClass:     PropTypes.string,
  theadClass:     PropTypes.string,
  tbodyClass:     PropTypes.string,
  thClass:        PropTypes.string,
  sortedThClass:  PropTypes.string,
  sortedTdClass:  PropTypes.string,
  trClass:        PropTypes.string,
  tdClass:        PropTypes.string,
  onSort:         PropTypes.func
}