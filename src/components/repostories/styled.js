import styled from 'styled-components'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'

export const WrapperTabs = styled(Tabs)`
  font-size: 1rem;
  width: 1120px;
  margin: 0 auto;
  color: #ebe8eb;
  height: 100%;
`

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px 0;
  display: flex;
  margin: 0;
  width: 1120px;
  margin: 0 auto;
`

WrapperTabList.tabsRole = 'TabList'

export const WrapperTab = styled(Tab)`
  border: 1px solid #ebe8eb;
  padding: 8px;
  user-select: none;
  cursor: pointer;

  &.is-selected {
    border-bottom: 1px solid #ebe8eb;
  }
`
WrapperTab.tabsRole = 'Tab'

export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  padding: 8px;
  border: 1px solid #ebe8eb;
  margin-top: -5px;
  &.is-selected {
    display: block;
  }
`
WrapperTabPanel.tabsRole = 'TabPanel'

export const WrapperList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
