import React from 'react';
import './ProfileInfo.scss';
import Popover from '@material-ui/core/Popover';
import PopoverContent from '../Search/PopoverContent';

import DateRangeIcon from '@material-ui/icons/DateRange';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import AddIcon from '@material-ui/icons/Add';

import Blank from '../../assets/images/blank-profile-picture.png';
import HeaderBackground from '../../assets/images/talentwyre-background.jpg';
import { Tooltip } from '@material-ui/core';

const calculateHeight = height => {
  const feet = Math.floor(height / 12)
  return `${feet}'${Math.floor((((height/12)-feet)*10))}"` 
}

const upCaseFirst = string => string.charAt(0).toUpperCase() + string.slice(1);

const ProfileInfo = ({data, viewCalendar, viewContact, viewProfile, viewCv}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const popoverOpen = Boolean(anchorEl);
  const id = popoverOpen ? 'simple-popover' : undefined;

  const handleClick = event => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="info">
      <article className="info__header">
        <img src={HeaderBackground} alt="" className="info__header__banner"/>
        <img src={data.image ? `${data.image}` : `${Blank}`} alt="" className="info__header__profileimg"/>
        {data.premium ? <h3 className="modal__premium modal__premium--profile">Premium</h3> : null}
        <button className="talentcard__bookmark" onClick={handleClick}>
          <Tooltip title="Add to shortlist" placement="top">
            <AddIcon className="talentcard__bookmark--click talentcard__bookmark--profile"/>
          </Tooltip>
        </button>
        <Popover
          id={id}
          className="popover"
          open={popoverOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
          placement='top-start'
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}>
          <PopoverContent/>
      </Popover>
      </article>
      <article className="info__navigation">
        <Tooltip title="View profile" placement="top">
          <article onClick={(e) => {
            e.preventDefault();
            viewProfile(e.currentTarget)
            }}><PersonOutlineIcon />
          </article>
        </Tooltip>
        <Tooltip title="View CV" placement="top">
          <article onClick={(e) => {
            e.preventDefault();
            viewCv(e.currentTarget)
            }}><DescriptionOutlinedIcon />
          </article>
        </Tooltip>
        <Tooltip title="Contact Talent" placement="top">
          <article onClick={(e) => {
            e.preventDefault();
            viewContact(e.currentTarget)
            }}><MailOutlineIcon />
          </article>
        </Tooltip>
        <Tooltip title="View Calendar" placement="top">
          <article onClick={(e) => {
            e.preventDefault();
            viewCalendar(e.currentTarget)
            }}><DateRangeIcon />
          </article>
        </Tooltip>
      </article>
      <article className="info__content">
        <h3 className="info__content__text"><LocationOnOutlinedIcon/> 
        <i>{data.name === '' ? 'Unknown' : `${data.name}, ${data.breed}`}</i>
        </h3>
        <article className="info__content__attributes">
          <InfoOutlinedIcon/>
          <article className="info__content__attributes__text">
            <h5 className="info__content__text"><b>Height:</b> {data.size}</h5>
            <h5 className="info__content__text"><b>Eyes:</b> {upCaseFirst(data.color)}</h5>
            <h5 className="info__content__text"><b>Age:</b> {data.age}</h5>
          </article>
        </article>
        <h3 className="info__content__text info__content__text--representation"><BusinessCenterOutlinedIcon/> Representation</h3>
      </article>
      <article className="info__footer">

      </article>
    </section>
  )
}

export default ProfileInfo;
