import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useRouter, Router } from 'next/router'
import { useState } from 'react';
import Modal from '../shared/Modal';
import { FormContainer } from '../shared/FormContainer'
import { FormFieldLabel } from '../shared/FormFieldLabel'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import HeaderContext from '../../contexts/HeaderContext';

export const EntryView = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [editEntryModalIsOpen, setEditModalIsOpen] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [roll, setRoll] = useState();

    const router = useRouter();
    const roll_id = router.query.roll_id
    const API = "http://localhost:3001"
    // const { loggedInUser } = useContext(HeaderContext)
    useEffect(() => {
        if (!router.isReady) return
        axios({
            method: 'GET',
            url: `${API}/api/v1/rolls/${roll_id}`,
        })
            .then(function (response) {
                console.log(response.data)
                setRoll(response.data);
                setLoading(false);
            });
    }, [router.isReady]);

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }


    const deleteEntry = (data) => {
        axios({
            method: 'DELETE',
            url: `${API}/api/v1/entries/${entry_id}`,
        })
            .then(function (response) {
                console.log(response.data)
                router.push(`/entries/new`)
            });
    }

    const editEntry = () => {
        setEditModalIsOpen(true)
    }

    const onEditEntrySubmit = (data) => {
        axios({
            method: 'PATCH',
            url: `${API}/api/v1/entries/${entry_id}`,
            data: {
                title: data.title,
                image: data.image,
                end_date: data.date,
                country: data.country,
                city: data.city,
                category: data.category,
                description: data.description,
            }
        }).then((response) => {
            console.log(response.data)
            var new_entry = response.data.entry
            entry.title = new_entry.title
            entry.image = new_entry.image
            entry.end_date = new_entry.date
            entry.country = new_entry.country
            entry.city = new_entry.city
            entry.category = new_entry.category
            entry.description = new_entry.description
        }).catch((error) => {
            console.log(error.response); // TEMP
        });
    }


}