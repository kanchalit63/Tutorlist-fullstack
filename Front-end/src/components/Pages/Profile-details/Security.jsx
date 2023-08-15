import React from 'react'
import "./Security.css"

function Security() {
  return (
    <>
      <div className="security-container">
        <div className="title-security">
          <div className="active-page-security">
            <a href="/Profile"><span>Profile</span></a>
            <a href="/Security"><span>Security</span></a>
            <a href="/"><span>Tutor</span></a>
          </div>
        </div>

        <div className="security-content-container">
          <section>
            <div className="content-one-security">
              <div className="title-one-security">Change Password</div>
              <form action="">
              <div className="detail-security-container">
              <div className="input-box-security">
                  <label htmlFor="" >Password</label><br />
                  <input type="text" placeholder='Enter current password' />
                </div>
                <div className="input-box-security">
                  <label htmlFor="">Password</label><br />
                  <input type="text" placeholder='Enter new password' />
                </div>
                <div className="input-box-security">
                  <label htmlFor="">Password</label><br />
                  <input type="text" placeholder='Confirm new password' />
                </div>
                <div className="btn-save-changepassword">
                  <button>Save</button>
                </div>
              </div> 
              </form>
            </div>
          </section>
          <section>
            <div className="content-two-security">
              <div className="title-two-security">Delete Account</div>
              <div className="detail-secuirty-content-two">
              <label>Deleting your account is a permanent action and cannot be undone. If you are sure you want to delete your account, select the button below.</label>
              </div>
              <div className="btn-delete-accout">
                <button >I understand, delete my account</button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

export default Security