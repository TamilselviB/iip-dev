import React from 'react';
import TableCovers from './TableCovers';
import './TableSub.css';
import Button from '@material-ui/core/Button';

const SafetyMeasures= ({ setValues, props ,type,description,handleNext}) => {
	return (
		<div style={{ marginLeft: '-30px' }}>
			<div class="card-body">
                <div class="col-lg-12">
                    <TableCovers setValues={setValues} props={props} type={type} description={description} />
					</div>
			</div>
			<Button variant="contained" color="primary" className="nextEndt" onClick={handleNext?handleNext:''}>
       		 Next
     		</Button>
		</div>
	);

}

export default SafetyMeasures;