import React from 'react';
import axios from 'axios';

type Props = {};

export const apiClient = axios.get('http://localhost:9000/testAPI');
