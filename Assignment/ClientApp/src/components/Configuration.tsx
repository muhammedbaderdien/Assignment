import React, { useState } from 'react';
import { IImageStyles, ImageFit, Image, Stack } from '@fluentui/react';
import DisplayNameField from './DisplayNameField';
import {
  configurationStackTokens,
  localSettingsContainerStyle,
  mainContainerStyle,
  fullScreenStyle,
  verticalStackStyle
} from './styles/Configuration.styles';


import staticMediaSVG from '../assets/logo.svg';
import staticMenuMediaSVG from '../assets/menu.svg';

export const imgStyles: Partial<IImageStyles> = {
    root: { height: '10.5rem', top: '-22%', left: '9%' }
};

export const imgMenuStyles: Partial<IImageStyles> = {
    root: { height: '65px' }
};

export interface ConfigurationScreenProps {

  setDisplayName(displayName: string): void;
  screenWidth: number;
}

export default (props: ConfigurationScreenProps): JSX.Element => {
    const imageProps = {
        src: staticMediaSVG.toString(),
        imageFit: ImageFit.center
    };
    const menuImageProps = {
        src: staticMenuMediaSVG.toString(),
        imageFit: ImageFit.center
    };
  const data = [{ "name": "Siteconstructor.io" }, { "name": "Appvision.com" }, { "name": "Analytics.com" }, { "name": "Logotype" }];


  const [name, setName] = useState('');

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
                              <Image className="nav-img" styles={imgStyles} {...imageProps} aria-label="Local video preview image" />
                            </a>
                            <a href="./" className="nav-link">
                                <Image className="nav-img" styles={imgMenuStyles} {...menuImageProps} aria-label="Local video preview image" />
                            </a>
                            <a href="./" className="nav-link">
                                <Image className="nav-img" styles={imgMenuStyles} {...menuImageProps} aria-label="Local video preview image" />
                            </a>
                            <a href="./" className="nav-link">
                                <Image className="nav-img" styles={imgMenuStyles} {...menuImageProps} aria-label="Local video preview image" />
                            </a>
                            <a href="./" className="nav-link">
                                <Image className="nav-img" styles={imgMenuStyles} {...menuImageProps} aria-label="Local video preview image" />
                            </a>
                            <a href="./" className="nav-link">
                                <Image className="nav-img" styles={imgMenuStyles} {...menuImageProps} aria-label="Local video preview image" />
                            </a>
                        </div>
                      </div>

                          <div className="col-11 offset-1" id="main">

                            <div className="col-lg-12 services-header">
                                <h1 className="display-4">{'Services'}</h1>
                            </div>
                          <div className="search">
                                <DisplayNameField setName={setName} name={name} placeHolder={''} labelName={'FILTER'}  />
                          </div>
                            {data.map(function (d, idx) {
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
