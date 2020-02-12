import React from 'react';
import Collapsible from 'react-collapsible';
import Todo from './Todo';
import './list.css'

function List (props){
        return (
            <div>
                <Collapsible trigger="My lists">
                {props.lists.map( list =>(
                <Todo id ={list.id} key={list.id} listName={list.listName} deleteList={props.deleteList}/>    
                ))}
                </Collapsible>
                
                <span>{props.lists.length ?
                       props.lists.length : 
                        "0"
                    }
                </span>
            </div>
            
        )
    }

export default List;