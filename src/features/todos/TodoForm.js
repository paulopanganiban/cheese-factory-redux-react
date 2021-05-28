import React from 'react'

const TodoForm = () => {
    return (
        <div className="container mt-5 m-6">
            <div className="columns is-vcentered is-centered">
                <div className="column is-half">
                    <h1 className="title">What do you want to do?</h1>
                    <form>
                        <div class="field">
                            <label class="label">Name</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Text input" />
                            </div>
                        </div>
                        <button type="submit" className="button">
                            Add
       </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TodoForm
