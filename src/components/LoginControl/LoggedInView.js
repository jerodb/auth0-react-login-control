import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

const LoggedInView = ({
  logout, menuList, picture, userName
}) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  function handleMenu(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        style={styles.iconButton}
      >
        {
          (picture && <img style={styles.pic} src={picture} alt="" />)
          || <AccountCircle style={styles.pic} />
        }
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        onClose={handleClose}
      >
        <div style={styles.userMenu}>
          <div style={styles.userName}>{`${userName}`}</div>
          {
            menuList.map((el, index) => (
              <MenuItem key={JSON.stringify(index)} onClick={el.onClick}>{el.name}</MenuItem>
            ))
          }
          <MenuItem onClick={logout}>Log Out</MenuItem>
        </div>
      </Menu>
    </>
  )
}

export default LoggedInView

const styles = {
  iconButton: {
    padding: 6,
  },
  pic: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  userMenu: {
    backgroundColor: '#525252',
    color: '#FFFFFF',
    width: 120,
    '& li': {
      paddingLeft: 10,
      paddingRight: 10,
    },
  },
  userName: {
    backgroundColor: '#777777',
    borderBottom: '1px solid #CCCCCC',
    fontSize: '1.1em',
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
  },
}