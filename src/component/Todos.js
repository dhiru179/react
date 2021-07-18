import React from 'react';
import TodosItem from './TodosItem';


export const Todos = function (pro) {
    // console.log(pro.task, typeof (pro.task))//for check
    return (
        <div className="container">

            <h4 className="text-center my-3">Todos</h4>
            <div className="d-flex justify-content-evenly flex-wrap ">
                {pro.task.length === 0 ? <div className="alert alert-info" role="alert">
                    You have no todo pleae add todo</div>
                     :
                    pro.task.map((element) => {
                        return <TodosItem todo={element} key={element.sno} onDelete={pro.onDelete} />

                    })

                }

            </div>

        </div >


    );

}
