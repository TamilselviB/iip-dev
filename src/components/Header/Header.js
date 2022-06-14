import React from 'react';

import { useTranslation } from 'react-i18next';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import IconTranslate from '@material-ui/icons/Translate';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/auth';
import useStyles from './Header.styles';

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const { i18n, t } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  // state
  const [lang, setLang] = React.useState(i18n.languages[0] ? i18n.languages[0] : 'en');
  const [langBtnEl, setLangBtnEl] = React.useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = React.useState(false);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const dispatch = useDispatch();
  const { username } = useSelector(state => state.authReducer);

  // vars
  const supportedLngs = i18n.services.languageUtils.supportedLngs.filter(lng => lng !== 'cimode');

  const renderLangMenuItems = () => {
    return supportedLngs.map((lang, key) => {
      return (
        <MenuItem key={key} data-value={lang} onClick={event => handleLangChange(event)}>
          {t(`languages.${lang}`)}
        </MenuItem>
      );
    });
  };

  const handleLangChange = event => {
    const value = event.target.getAttribute('data-value');
    i18n.changeLanguage(value);
    setLang(value);
    setLangBtnEl(false);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const exit = () => {
    dispatch(logout());
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          exit();
        }}
      >
        Logout
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const renderNotifications = () => {
    return (
      <Paper className={classes.tooltipPaper}>
        <Typography component="div" className={classes.tooltipNotification}>
          Endorse the insured info
        </Typography>
        <Divider className={classes.tooltipDivider} />
        <Typography component="div" className={classes.tooltipNotification}>
          Endorse the cover
        </Typography>
        <Divider className={classes.tooltipDivider} />
        <Typography component="div" className={classes.tooltipNotification}>
          Endorse the policy level coverage
        </Typography>
      </Paper>
    );
  };
  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <img
            className={classes.headerImage}
            src="../assets/images/icon.png"
            alt="insurance icon"
          />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={t('header.search')}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {i18n && (
              <>
                <Button
                  aria-controls="language-menu"
                  aria-haspopup="true"
                  color="inherit"
                  data-cy="btn-language-menu"
                  endIcon={<IconExpandMore />}
                  onClick={e => setLangBtnEl(e.currentTarget)}
                  startIcon={<IconTranslate />}
                >
                  {t(`languages.${lang}`)}
                </Button>
                <Menu
                  anchorEl={langBtnEl}
                  id="language-menu"
                  onClose={() => setLangBtnEl(null)}
                  onChange={event => handleLangChange(event)}
                  open={Boolean(langBtnEl)}
                >
                  {renderLangMenuItems()}
                </Menu>
              </>
            )}
            <ClickAwayListener onClickAway={() => setIsNotificationsOpen(false)}>
              <Tooltip
                classes={{ tooltip: classes.tooltipNotifications }}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                onClose={() => setIsNotificationsOpen(false)}
                open={isNotificationsOpen}
                title={renderNotifications()}
              >
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                  onClick={() => setIsNotificationsOpen(true)}
                >
                  <Badge badgeContent={3} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
            </ClickAwayListener>
            <IconButton
              aria-label="show 17 new notifications"
              color="inherit"
              style={{ width: 'auto' }}
            >
              <AccountCircle />
            </IconButton>
            <Button
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className={classes.name}
              endIcon={<IconExpandMore />}
            >
              {username}
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
