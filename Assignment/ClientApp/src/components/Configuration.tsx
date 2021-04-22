import React, { useEffect, useState } from 'react';

import { TextField } from '@fluentui/react';
import { IImageStyles, ImageFit, Image, Stack } from '@fluentui/react';
import DisplayNameField from './DisplayNameField';
import {
  configurationStackTokens,
  localSettingsContainerStyle,
  mainContainerStyle,
  fullScreenStyle,
  verticalStackStyle,
  inputBoxTextStyle,
  inputBoxStyle,
  labelFontStyle
} from './styles/Configuration.styles';


import staticMediaSVG from '../assets/logo.svg';
import staticMenuMediaSVG from '../assets/menu.svg';
import { getServices } from '../core/sideEffects';
import { setServices } from '../core/actions/sdk';

export const imgStyles: Partial<IImageStyles> = {
    root: { height: '10.5rem', top: '-22%', left: '9%' }
};

export const imgMenuStyles: Partial<IImageStyles> = {
    root: { height: '65px' }
};

export interface ConfigurationScreenProps {
  setDisplayName(displayName: string): void;
  onNameTextChange(name: string): void;
  screenWidth: number;
  data: any;
  setServices(services: any): void;
  services: any;
}

export default (props: ConfigurationScreenProps): JSX.Element => {
    
    const onNameTextChange = (event: any) => {

        setMsg((event.target as HTMLInputElement).value); 

        const fetchData = async () => {
            var keyword = (event.target as HTMLInputElement).value;
            if (keyword === '') {
                keyword = '*';
            }

            console.log('onNameTextChange - keyword', keyword);
            var retrievedServices = await getServices(keyword);

            console.log('onNameTextChange - retrievedServices', retrievedServices);
            if (retrievedServices !== undefined) {

                setServices(retrievedServices);
		  }
        };
        fetchData();
        if (event.target.value) {
            //props.setEmptyWarning(false);
        } else {
            //props.setEmptyWarning(true);
        }
    };
    const imageProps = {
        src: staticMediaSVG.toString(),
        imageFit: ImageFit.center
    };
    const menuImageProps = {
        src: staticMenuMediaSVG.toString(),
        imageFit: ImageFit.center
    };
    


    const [name, setName] = useState('');
    const [msg, setMsg] = useState("");
    const [services, setServices] = useState<any[]>([]);
    var data = [{ "name": "Siteconstructor.io" }, { "name": "Appvision.com" }, { "name": "Analytics.com" }, { "name": "Logotype" }];
    const TextFieldStyleProps = {
        wrapper: {
            height: '2.3rem'
        },
        fieldGroup: {
            height: '2.3rem'
        }
    };


    useEffect(() => {
        console.log(msg); // Now you will get updated value every time.
        console.log('services',services);
        if (services.length == 0 && msg === "") {
            const fetchData = async () => {
                var retrievedServices = await getServices('*');
                console.log('retrievedServices', retrievedServices);
                if (retrievedServices !== undefined) {
                    setServices(retrievedServices);
                }
            };
            fetchData();
	   }
    }, [data, services, setServices]);

    
  return (
    <Stack className={mainContainerStyle} horizontalAlign="center" verticalAlign="center">
      
        <Stack
          className={props.screenWidth > 750 ? fullScreenStyle : verticalStackStyle}
          horizontal={props.screenWidth > 750}
          horizontalAlign="center"
          verticalAlign="center"
          tokens={props.screenWidth > 750 ? configurationStackTokens : undefined}
              >
       
          <Stack className={localSettingsContainerStyle}>

               <div className="container-fluid">
                  <div className="row">
                      <div className="col-1 px-1 bg-dark position-fixed" id="sticky-sidebar">
                        <div className="nav flex-column flex-nowrap vh-100 overflow-auto text-white p-2">
                            <a href="#" className="navbar-brand">
                              <Image className="nav-img" styles={imgStyles} {...imageProps}  />
                            </a>
                            <a href="./" className="nav-link">
                                <Image className="nav-img" styles={imgMenuStyles} {...menuImageProps}  />
                            </a>
                            <a href="./" className="nav-link">
                                <Image className="nav-img" styles={imgMenuStyles} {...menuImageProps}  />
                            </a>
                            <a href="./" className="nav-link">
                                <Image className="nav-img" styles={imgMenuStyles} {...menuImageProps}  />
                            </a>
                            <a href="./" className="nav-link">
                                <Image className="nav-img" styles={imgMenuStyles} {...menuImageProps}  />
                            </a>
                            <a href="./" className="nav-link">
                                <Image className="nav-img" styles={imgMenuStyles} {...menuImageProps}  />
                            </a>
                        </div>
                      </div>

                          <div className="col-11 offset-1" id="main">

                            <div className="col-lg-12 services-header">
                                <h1 className="display-4">{'Services'}</h1>
                            </div>
                              <div className="search">

                                  
                                  <div className={labelFontStyle}>{'FILTER'}</div>
                                  <TextField
                                      autoComplete="off"
                                      inputClassName={inputBoxTextStyle}
                                      ariaLabel="Search Services"
                                      borderless={true}
                                      className={inputBoxStyle}
                                      onChange={onNameTextChange}
                                      id="search"
                                      placeholder={''}
                                      defaultValue={name}
                                      styles={TextFieldStyleProps}
                                  />
                          </div>
                            {services.map(function (d, idx) {
                                //return (<li key={idx}>{d.name}</li>)
                                return (
                    
                                    <div className="jumbotron">
                           
                            
                                        <div className="row">
                                            <div className="col-lg-6 col-md-4">
                                                <h1 className="display-5">{ d.name }</h1>
                                                <p className="desc">Description</p>
                                            </div>
                                            <div className="col-lg-3 col-md-4">
                                                <DisplayNameField setName={setName} name={name} labelName={'PROMOCODE'} placeHolder={''}  />
                                            </div>
                                            <div className="col-lg-3 col-md-4">
                                                <a className="btn btn-primary btn-lg" href="#" role="button">Activate Bonus</a>
                                            </div>
                                            </div>
                                    </div>

                                )

                            })}
                       </div>
                    </div>
                  </div>
          </Stack>
        </Stack>
      
    </Stack>
  );
};
