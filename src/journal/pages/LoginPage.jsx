import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@maui/material';
import { Google } from '@maui/icons-material';

import React from 'react'
import { AuthLayouth } from '../layout/AuthLayout';


export const LoginPage = () => {
    return (
        <AuthLayouth title="Login!!!">
                <form>
                    <Grid container>
                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                                <TextField
                                    label="Correo"
                                    type="email"
                                    placeholder='correo@google.com'
                                    fullWidth
                                />
                            </Grid>

                            <Grid item>
                                <TextField
                                    label="Contraseña"
                                    type="password"
                                    placeholder='Contraseña'
                                    fullWidth
                                />
                            </Grid>

                            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                                <Grid item xs={ 12 } sm={ 6 }>
                                        <Button variant='contained' fullWidth>
                                            Login
                                        </Button>
                                </Grid>
                                <Grid item xs={ 12 } sm={ 6 }>
                                    <Button variant='contained' fullWidth>
                                        <Google/>
                                        <Typography sx={{ ml: 1 }}>Google</Typography>
                                    </Button>
                                </Grid>

                                <Grid container='row' justifyContent='end'>
                                    <Link color='inherit' to="/auth/register">
                                        Crear una cuenta
                                    </Link>

                                </Grid>

                            </Grid>
                    </Grid>
                </form>
        </AuthLayouth>
       

            
     
    )
}