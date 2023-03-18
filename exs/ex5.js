import React, { Component } from 'react';

class Ex5 extends Component {
constructor(props){
super(props);
this.listEl = {
  'Ecole primaire :':['IBN SINA', 'ALMAID'],
  'Ecole secondaire :': ['MANFALOUTI', 'LAAYOUNE'],
  'Qualifiant :':['HASSAN 2', 'YOUSSEF INB TACHAFINE'],
  'Universite :':['CADY AYAD, faculte DES SCIENCES']
};

}
render (){
return (
<div className='container'>
  <ol>{
    this.listEl.map((index, el)=>{
      <li>{index} <ul>{el.map((e)=><li>{e}</li>)}</ul></li>
    })
  }</ol>
  {/*<ol>
    <li>
      Ecole primaire :
      <ul>
        <li>IBN SINA</li>
        <li>ALMAID</li>
      </ul>
    </li>
    <li>
      Ecole secondaire :
      <ul>
        <li>MANFALOUTI</li>
        <li>LAAYOUNE</li>
      </ul>
    </li>
    <li>
      Qualifiant :
      <ul>
        <li>HASSAN 2</li>
        <li>YOUSSEF INB TACHAFINE</li>
      </ul>
    </li>
    <li>
      Universite :
      <ul>
        <li>CADY AYAD, faculte DES SCIENCES</li>
      </ul>
    </li>
  </ol> */}
</div>
)
}
}


export default Ex5;
