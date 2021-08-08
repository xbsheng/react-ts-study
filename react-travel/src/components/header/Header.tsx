import React from 'react'
import { Button, Dropdown, Input, Layout, Menu, Typography } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import style from './style.module.less'
import logo from '@/assets/images/logo.svg'

import { useTranslation } from "react-i18next";

import { useSelector, useDispatch } from 'react-redux'
import { changeLanguageAction } from '@/redux/language/action'
import { LanguageState } from '@/redux/language/reducer'

interface Props {

}

export const Header = (props: Props) => {
  const language = useSelector((state: LanguageState) => state.language)
  const languageList = useSelector((state: LanguageState) => state.languageList)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const changeLanguage = (info: any) => {
    const action = changeLanguageAction(info.key)
    dispatch(action)
  }
  return (
    <div className={style["app-header"]}>
      <div className={style["top-header"]}>
        <div className={style.inner}>
          <Typography.Text>让旅游更幸福</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu onClick={changeLanguage} selectedKeys={[language]}>
                {languageList.map(item => <Menu.Item key={item.code}>{item.name}</Menu.Item>)}
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            {t('header.language')}
          </Dropdown.Button>
          <Button.Group className={style["button-group"]}>
            <Button>{t('header.login')}</Button>
            <Button>{t('header.register')}</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={style["main-header"]}>
        <img src={logo} alt="logo" className={style["App-logo"]} />
        <Typography.Title level={3} className={style.title}>
          React旅游网
        </Typography.Title>
        <Input.Search
          placeholder={"请输入旅游目的地、主题、或关键字"}
          className={style["search-input"]}
        />
      </Layout.Header>
      <Menu mode={"horizontal"} className={style["main-menu"]}>
        <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
        <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
        <Menu.Item key="3"> {t("header.group")} </Menu.Item>
        <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
        <Menu.Item key="5"> {t("header.private")} </Menu.Item>
        <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
        <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
        <Menu.Item key="8"> {t("header.local")} </Menu.Item>
        <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
        <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
        <Menu.Item key="11"> {t("header.study")} </Menu.Item>
        <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
        <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
        <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
        <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
        <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
      </Menu>
    </div>
  )
}
