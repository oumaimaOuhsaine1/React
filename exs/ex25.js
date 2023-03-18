import React,{Component} from 'react';
import React,{useState} from 'react';


class Exercice extends React.Component{
    constructor(){
        this.state={
	       poids:"",
		   taille:"",
		   info:"",
        }
        this.handlePoid=this.state.handlePoid;
        this.handleTaille=this.state.handleTaille;
        this.handleSubmit=this.state.handleSubmit;

    }
      
		handlePoid(e){
		let val1=e.target.value;
		this.poids=this.state.poids;
		val1=poids;
		e.preventDefault;}
		
		handleTaille(e){
		let val2 = e.target.value;
		let taille= this.state.taille;
		val2=taille;
		e.preventDefault;}
		
		handleSubmit(e){
		   let val1;
           let val2;
		   let text = 'BMI:${val1}*10000/${val2}**2';
		   this.setstate({text});
		   }
		 render(){
		    return(
		 <div>
            <h1>Indce de masse complete</h1>
            <form action="" onClick={handleSubmit()}>
                 Poids<input type="text" name='poids' onChange={handlePoid()} />
                 Taille<input type="text" name='taille' onChange={handleTaille()}/>
                 <input type="submit"/>
                 <p>{this.state.text}</p>

            </form>
         </div>)
         }}