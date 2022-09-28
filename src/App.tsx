import React, {useState, useEffect, FormEvent, Fragment} from 'react';
import './App.css';

// Utilizando named export para evitar errores
import { InputField } from './components/InputField';
import { SelectField } from './components/SelectField';
import { HeaderField } from './components/HeaderField';
import { SubmitButton } from './components/SubmitButton';
import { FooterField } from './components/FooterField';
// import { MessageField } from './components/MessageField';

// Opciones de la lista Tipo de empresa
const businessTypeList = [
    {key:'0', value:'def', option:'Seleccione el tipo de empresa'},
    {key:'1', value:'dlv', option:'Delivery'},
    {key:'2', value:'sl', option:'Social Listening'},
    {key:'3', value:'msj', option:'Mensajería'}
];

// Opciones de la lista Flujo 
const flowCompleteList = [
    {key:'0', value:'def', option:'Seleccione el tipo de flujo'},
    {key:'1', value:'com', option:'Completo'},
    {key:'2', value:'rya', option:'Responde y atiende'},
    {key:'3', value:'ati', option:'Atiende'},
    {key:'4', value:'cyr', option:'Clasifica y responde'},
    {key:'5', value:'res', option:'Responde'}
];

// Opciones de la lista Auto Respuesta 
const autoReplyCompleteList = [
    {key:'0', value:'def', option:'Selecciona la Auto Respuesta'},
    {key:'1', value:'des', option:'Deshabilitado'},
    {key:'2', value:'pdd', option:'Pedir datos y derivar'},
    {key:'3', value:'maa', option:'Manejo automático'},
    {key:'4', value:'cla', option:'Clasificación automática'},
];

function App() {

    // States
    const [businessName, setBusinessName] = useState('');
    const [businessType, setBusinessType] = useState<string>('def');
    const [flowType, setFlowType] = useState<string>('def');
    const [flowTypeList, setFlowTypeList] = useState([flowCompleteList[0]]);
    const [autoReplyType, setAutoReplyType] = useState<string>('def')
    const [autoReplyTypeList, setAutoReplyTypeList] = useState([flowCompleteList[0]])

    // Effects
    // Controla la lista de flujo a partir del tipo de empresa elegido
    useEffect(() => {
        const tempFlowList = [flowCompleteList[0]];
        setFlowType('def');
        setAutoReplyType('def');

        if(businessType === 'dlv') {
        tempFlowList.push(flowCompleteList[1], flowCompleteList[2], flowCompleteList[3]);
        } else if(businessType === 'sl' || businessType === 'msj') {
        tempFlowList.push(flowCompleteList[4], flowCompleteList[5]);
        }
        setFlowTypeList(tempFlowList);
    }, [businessType]);

    // Controla la lista de auto respuesta a partir del tipo de flujo elegido
    useEffect(() => {
        const tempList = [autoReplyCompleteList[0]];
        setAutoReplyType('def');

        if(flowType === 'rya') {
        tempList.push(autoReplyCompleteList[1], autoReplyCompleteList[2], autoReplyCompleteList[3])
        } else if(flowType === 'res') {
        tempList.push(autoReplyCompleteList[1], autoReplyCompleteList[4]);
        }
        setAutoReplyTypeList(tempList);
    }, [flowType]);

    // Envio del formulario
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const data = new FormData();
        data.append('businessName', businessName);
        data.append('businessType', businessType);
        data.append('flowType', flowType);
        data.append('autoReplyType', autoReplyType);

        // Manejo de errores
        if(businessName === '') {
            console.log('Error: Ingrese el Nombre de la Empresa...');
        } else if(businessType === 'def') {
            console.log('Error: Seleccione el Tipo de Empresa...');
        } else if(flowType === 'def') {
            console.log('Error: Seleccione el Flujo de Empresa...');
        } else if((flowType === 'rya' || flowType === 'res') && autoReplyType === 'def') {
            console.log('Error: Seleccione el campo Auto respuesta...');
        }

        console.log(Object.fromEntries(data.entries()));
    }

    return (
        <Fragment>
            <div className='container'>
                <img src='/images/logo.png' alt=''></img>

                <div className='container-text'>
                    <HeaderField
                        title = 'Panel de Configuración'
                        subtitle = 'Panel de control para administrar configuraciones'  
                    />

                    <form onSubmit={handleSubmit}>
                        <InputField
                            title = 'Nombre de la empresa'
                            message = 'Inserte el nombre de la empresa'
                            setBusinessName = {setBusinessName}
                        />

                        <SelectField
                            title = 'Tipo de empresa'
                            selectOptions = {businessTypeList}
                            setSelectedOption = {setBusinessType}
                        />

                        <SelectField
                            title = 'Flujo'
                            selectOptions = {flowTypeList}
                            setSelectedOption = {setFlowType}
                        />

                        {(flowType === 'rya' || flowType === 'res') &&
                        <SelectField
                            title = 'Auto Respuesta'
                            selectOptions = {autoReplyTypeList}
                            setSelectedOption = {setAutoReplyType}
                        />
                        }

                        <SubmitButton
                            title = 'Enviar'
                        />
                    </form>

                    <FooterField
                        message = 'Tienes algún problema? '
                        link = 'Contáctanos' 
                    />
                    
                </div>
                <div className='container-img'>
                    <img src='/images/image.jpg' alt=''></img>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
