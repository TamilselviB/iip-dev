import React, { useEffect } from 'react';
import NewLocation from './NewLocation';
import UserInfo from './userInfo';
import AddCover from './AddCover';
import AddRisk from './AddRisk';
import AddTerms from './AddTerms';
import AddDocs from './AddDocs';
import  DeleteLocation from "./DeleteLocation";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import {sendEndorsementRequest} from '../../Services/endorsementService';
import { fetchPolicy } from '../../actions/userPolicy';
import { string } from 'prop-types';
import { push as routerPush } from 'connected-react-router';


function Endorse(props) {
    const history = useHistory();
    const dispatch = useDispatch();

    console.log(props.location.state)
    const [value, setValue] = React.useState('No');
    const data = useSelector(state => state.policyReducer.activePolicy);
    console.log("🚀 ~ file: endorse.js ~ line 18 ~ Endorse ~ data", data)

    const submit = async (data) => {
        data.policyId = props.location.state.policyId;
        data.endorsementTypeId = props.location.state.endorsementId;

        if(typeof(props.location.state.type)==='string')
            data.endorsementDescription = props.location.state.type;
        else
            data.endorsementDescription = "change the cover datails";
        data.endorsementRemarks = props.location.state.remarksValue;
        data.endorsementEffectiveDate=props.location.state.endorsementEffectiveDate;
        let response = await sendEndorsementRequest(data)
        console.log("🚀 ~ file: Endorse.js ~ line 40 ~ submit ~ response", response)

        if (response != false)
        {
        confirmAlert(response.endorsementRequestId)
        }
            // history.push(`/Customer/viewpolicy/${props.location.state.policyId}`);
    };
    function confirmAlert(id) {
        Swal.fire({
          title: 'Confirmation',
          text: `Your Request with Id ${id} has been posted to the Insurance Companies / Brokers you have chosen, We will get back to you as soon as possible.`,
          icon: 'success',
        }).then(() => dispatch(routerPush('/Customer')));
      }

    useEffect(() => {
        // if(Object.keys(data).length==0)
        dispatch(fetchPolicy(props.location.state.policyId));
    }, []);
    return (
        <div>

            {props.location.state.type == 'Do you want to change the Insured Details like Address,Contact details, Registration No and Insured Name' && Object.keys(data).length>0 ? (<UserInfo data={data}  submit={submit} />) : null}
            {props.location.state.type == 'Add a New Location' ? (<NewLocation data={data}  submit={submit} endorsementEffectiveDate={props.location.state.endorsementEffectiveDate} />) : null}
            {props.location.state.type == 'Delete a Location' && Object.keys(data).length>0 ? (<DeleteLocation data={data}  submit={submit} />) : null}
            {props.location.state.type == 'Makes changes to the Risk Address and Details' && Object.keys(data).length>0 ? (<AddRisk data={data}  submit={submit} />) : null}
            {props.location.state.type == 'Want to change T & C' && Object.keys(data).length>0 ? (<AddTerms data={data}  submit={submit} />) : null}
            {props.location.state.type == 'Upload additional documents' && Object.keys(data).length>0 ? (<AddDocs  data={data}  submit={submit} />) : null}
            {props.location.state.endorsementId == 5  && Object.keys(data).length>0 ? (<AddCover  data={data} cover={props.location.state.type['Want to Add/Remove a Cover']} sumInsured={props.location.state.type['Want to Increase/Decrease the Sum Insured']} submit={submit} />) : null}
            {/* {props.location.state.type == 'Want to Increase/Decrease the Sum Insured' ? (<AddCover />) : null} */}
            {props.location.state.type == 'Want to change the Rate' ? (<AddCover />) : null}
            {props.location.state.type == 'Want to make changes in Excess/Deductible' ? (<AddCover />) : null}
        </div>
    );
}

export default Endorse;

