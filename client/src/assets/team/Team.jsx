import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import '../../styles/team.css';
import '../../styles/peoplecard.css';
import Footer from '../../components/Footer/Footer';
import Webdev from './webdev';
import Logistics from './logistics';
import Magazine from './magazine';
import Merch from './merch';
import Outreach from './outreach';
import Alumni from './alumni';
import Clubhead from './clubhead';

function Team() {

  return (
    <>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"/>
      <div className="Team-encloser1">
        <Navbar />
      </div>
			<div className="Team-encloser2"> <div className="Team-heading">	&lt;Our Team/&gt; </div></div>
			<center className='TeamName'>Club Head</center>
			<Clubhead />
			<center className='TeamName'>Logistics + KV + Stargazing</center>
			<Logistics />
			 <center className='TeamName'>Web Development Team</center>
			<Webdev />
			<center className='TeamName'>Magazine</center>
			<Magazine />
			<center className='TeamName'>Merch</center>
			<Merch />
			<center className='TeamName'>Outreach & social media</center>
			<Outreach />
			<center className='TeamName'>Alumni</center>
			<Alumni />
      <Footer />
    </>
  );
}

export default Team;
