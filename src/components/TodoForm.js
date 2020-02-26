import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            "title": "",
            "responsible": "",
            "description": "",
            "priority": "low"
        }
        this.handleInput=this.handleInput.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }

    handleInput(e){
        const {value,name}=e.target;
        this.setState({
            [name]:value
        })


    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);



    }

    render() {
        return (
            <div className={'card'} onSubmit={this.handleSubmit}>
                <form className={'card-body'}>
                    <div className={'form-group'}>
                        <input type="text" name="title"
                               className={'form-control'}
                               placeholder="Titulo"
                               onChange={this.handleInput}>

                        </input>
                    </div>
                    <div className={'form-group'}>
                        <input type="text" name="responsible"
                               className={'form-control'}
                               placeholder="Responsable"
                               onChange={this.handleInput}>

                        </input>
                    </div>
                    <div className={'form-group'}>
                        <input type="text" name="description"
                               className={'form-control'}
                               placeholder="Descripcion"
                               onChange={this.handleInput}>

                        </input>
                    </div>
                    <div className={'form-group'}>
                        <select  name="priority"
                               className={'form-control'}
                               onChange={this.handleInput}>
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>

                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Enviar
                    </button>


                </form>
            </div>
        );
    }
}

export default TodoForm;