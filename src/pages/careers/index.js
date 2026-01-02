import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { Group, NativeSelect, Text, TextInput, Button, LoadingOverlay } from "@mantine/core";
import { BiChevronDown } from "react-icons/bi";
import { useState } from 'react';
import { DateInput } from '@mantine/dates';
import { Radio } from '@mantine/core';
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { useForm } from '@mantine/form';
import Head from "next/head";

const inter = Inter({
    subsets: ['latin'],
});

const divVariants = {
    hidden: {
        transition: {
            staggerChildren: .2, // delay between animating children
            staggerDirection: -1, // animating children in reverse order
        },
    },
    visible: {
        transition: {
            staggerChildren: .2,
            staggerDirection: 1, // animating children in normal order,
            type: "spring"
        },
    },
};

const childVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .22, // duration of the animation
            ease: "easeOut", // easing function
        },
    }
};

const countries_name = [
    "Afghanistan",
    "Åland Islands",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, The Democratic Republic of The",
    "Cook Islands",
    "Costa Rica",
    "Cote D'ivoire",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-bissau",
    "Guyana",
    "Haiti",
    "Heard Island and Mcdonald Islands",
    "Holy See (Vatican City State)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran, Islamic Republic of",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, Democratic People's Republic of",
    "Korea, Republic of",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libyan Arab Jamahiriya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Macedonia, The Former Yugoslav Republic of",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestinian Territory, Occupied",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Helena",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Pierre and Miquelon",
    "Saint Vincent and The Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and The South Sandwich Islands",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Eswatini",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan (ROC)",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "United States Minor Outlying Islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Virgin Islands, British",
    "Virgin Islands, U.S.",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];


const Careers = () => {

    const [yes, setYes] = useState(false);

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [contact, setContact] = useState('');
    // const [address, setAddress] = useState('');
    // const [city, setCity] = useState('');
    // const [state, setState] = useState('');
    // const [postalCode, setPostalCode] = useState('');
    // const [country, setCountry] = useState('');
    // const [position, setPosition] = useState('');
    // const [date, setDate] = useState('');
    // const [currentEmployment, setCurrentEmployment] = useState('');

    // const formData = {
    //     name,
    //     email,
    //     contact,
    //     address,
    //     city,
    //     state,
    //     postalCode,
    //     country,
    //     position,
    //     date,
    //     currentEmployment,
    //     resume,
    // };

    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            contact: '',
            address: '',
            city: '',
            state: '',
            postalCode: '',
            country: '',
            position: '',
            date: '',
            currentEmployment: '',
            resume: '',
        },
        validate: {
            name: (value) => (value.length < 2 ? 'Invalid name' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            contact: (value) => (value.length < 10 ? 'Invalid phone number' : null),
            address: (value) => (value.length < 5 ? 'Invalid address' : null),
            city: (value) => (value.length < 2 ? 'Invalid city' : null),
            state: (value) => (value.length < 2 ? 'Invalid state' : null),
            postalCode: (value) => (value.length < 2 ? 'Invalid postal code' : null),
            country: (value) => (value.length < 2 ? 'Invalid country' : null),
            position: (value) => (value.length < 2 ? 'Invalid position' : null),
            currentEmployment: (value) => (value.length < 2 ? 'Invalid current employment' : null),
            resume: (value) => (value.length < 2 ? 'Invalid resume link' : null),
        },
        // onSubmit: (values) => {
        //   console.log(values);
        //   form.reset;
        // },
    });

    // const readFile = (paramFile) => {
    //     return new Promise((resolve, reject) => {
    //         const reader = new FileReader();

    //         reader.onload = () => {
    //             resolve(reader.result);
    //         };

    //         reader.onerror = () => {
    //             reject(reader.error);
    //         };

    //         reader.readAsText(paramFile);
    //     });
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(form.values);

        const formData = new FormData();

        for (const [key, value] of Object.entries(form.values)) {
            formData.append(key, value);
        }


        // console.log(Object.entries(resume));

        // console.log(form.values);

        // try {
        //     const content = await readFile(resume);
        //     console.log(content);
        //     formData.append("fileResult", content)
        //     setFile(content);
        // } catch (error) {
        //     setFile(["error"]);
        //     console.error('Error reading file:', error);
        // }

        // console.log(formData.get("email"));
        // console.log(formData.get("file").name);

        // formData.append("fileName", resume.name)
        // formData.append("fileResult", file)
        // formData.append("fileSize", resume.size)
        // formData.append("fileType", resume.type)

        setYes(true);

        fetch('/api/careers', {
            method: 'POST',
            // headers: {
            //   'Accept': 'application/json, text/plain, */*',
            //   'Content-Type': 'application/json',
            //   'Content-Type': 'multipart/form-data',
            // },
            body: new URLSearchParams(formData),
        }).then((res) => {
            console.log('Response received');
            if (res.status === 200) {
                console.log('Response succeeded!');
            }
            else {
                console.log("Something went wrong!")
            }
        })

        setYes(false);
    }

    return (
        <>

            <Head>
                <title>S P Solutions Point Pvt. Ltd. | Careers</title>
                <meta name="description" content="sp solutions point" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />

            </Head>

            <Navbar />

            <div className="careers-container">
                <LoadingOverlay visible={yes} overlayBlur={2} />
                <motion.div
                    className={`${inter.className} careers-heading`}
                    variants={divVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >

                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >Recruitment</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0, color: "#E00C05" }} >Application</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, padding: 0 }} >Form</motion.p>
                </motion.div>

                <form onSubmit={handleSubmit} className="careers-child-container">
                    <TextInput label="Name" required max={50} miw={280} {...form.getInputProps('name')} />
                    <TextInput label="Email" required max={100} miw={280} type="email" {...form.getInputProps('email')} />
                    <TextInput label="Phone number" required max={100} miw={280} {...form.getInputProps('contact')} />
                    <TextInput label="Address" required miw={280} {...form.getInputProps('address')} />
                    <div style={{ display: "flex", flexDirection: "row", gap: "40px" }}>
                        <TextInput label="City" required max={50} {...form.getInputProps('city')} />
                        <TextInput label="State" required max={50} {...form.getInputProps('state')} />
                        <TextInput label="Postal code" required max={50} {...form.getInputProps('postalCode')} />
                        <NativeSelect
                            label="Country"
                            data={countries_name}
                            rightSection={<BiChevronDown size="1rem" style={{ color: "grey" }} />}
                            rightSectionWidth={40}
                            required
                            {...form.getInputProps('country')}
                        />
                    </div>
                    <NativeSelect
                        label="What position are you applying for?"
                        data={["Desktop Support Engineer", "Printer Support Engineer", "Marketing Manager"]}
                        rightSection={<BiChevronDown size="1rem" style={{ color: "grey" }} />}
                        rightSectionWidth={40}
                        required
                        {...form.getInputProps('position')}
                    />
                    <DateInput
                        {...form.getInputProps('date')}
                        label="When could you start?"
                        placeholder="January 1, 2000"
                        mx="auto"
                        required
                        style={{ width: "100%" }}
                    />
                    <Radio.Group
                        name="favoriteFramework"
                        label="What is your current employment status?"
                        withAsterisk
                        className="careers-radio-group"
                        {...form.getInputProps('currentEmployment', { type: 'radio' })}
                    >
                        <Radio value="employed" label="Employed" style={{ margin: "5px 0" }} />
                        <Radio value="unemployed" label="Unemployed" style={{ margin: "5px 0" }} />
                        <Radio value="self-employed" label="Self-Employed" style={{ margin: "5px 0" }} />
                        <Radio value="student" label="Student" style={{ margin: "5px 0" }} />
                        <Radio value="other" label="Other" style={{ margin: "5px 0" }} />
                    </Radio.Group>
                    <TextInput label="Your Resume Link" required max={50} {...form.getInputProps('resume')} />
                    <Button type="submit" className="careers-child-submit-button">Submit</Button>
                </form>
            </div>

            <Footer />
        </>
    )
}

export default Careers;
