import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role='form' className='todoForm' className="d-flex bd-highlight" >
        <div className="p-2 flex-fill bd-highlight">
            <Grid cols='12 9 10' >
                <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    onChange={props.handleChange} 
                    value={props.description} />
            </Grid>
        </div>

        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus'
                onClick={props.handleAdd} />
        </Grid>
    </div>
)