import React from 'react'

import { Layout, Typography } from 'antd'
import { withTranslation, WithTranslation } from "react-i18next";
import { Dispatch } from "redux"
import { connect } from "react-redux";

import { LanguageState } from "@/redux/language/reducer";
import { LanguageActionTypes } from '@/redux/language/action'
class FooterComp extends React.Component<WithTranslation> {
  render() {
    console.log(this.props)
    const { t } = this.props
    return (
      <div>
        <Layout.Footer>
          <Typography.Title level={4} style={{ textAlign: 'center' }}>
            {/* 版权所有 @ React 旅游网 */}
            {t('footer.detail')}
          </Typography.Title>
        </Layout.Footer>
      </div>
    )
  }
}

// redux
const mapStateToProps = (state: LanguageState) => ({ language: state.language })
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    doSomething: (action: LanguageActionTypes) => dispatch(action)
  }
}
export const Footer = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(FooterComp))
