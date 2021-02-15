package com.devonfw.application.jtqj.ownermanagement.dataaccess.api;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.devonfw.application.jtqj.general.dataaccess.api.ApplicationPersistenceEntity;
import com.devonfw.application.jtqj.ownermanagement.common.api.Owner;

/**
 * TODO cromeras This type ...
 */
@Entity
@Table(name = "Owner")
public class OwnerEntity extends ApplicationPersistenceEntity implements Owner {

  private String username;

  private String password;

  private Boolean userType;

  private static final long serialVersionUID = 1L;

  /**
   * @return username
   */
  public String getUsername() {

    return this.username;
  }

  /**
   * @param username new value of {@link #getusername}.
   */
  public void setUsername(String username) {

    this.username = username;
  }

  /**
   * @return password
   */
  public String getPassword() {

    return this.password;
  }

  /**
   * @param password new value of {@link #getpassword}.
   */
  public void setPassword(String password) {

    this.password = password;
  }

  /**
   * @return userType
   */
  public Boolean getUserType() {

    return this.userType;
  }

  /**
   * @param userType new value of {@link #getuserType}.
   */
  public void setUserType(Boolean userType) {

    this.userType = userType;
  }

}
