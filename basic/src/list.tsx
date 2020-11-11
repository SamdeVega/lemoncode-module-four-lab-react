import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@material-ui/core"
import { Pagination } from "@material-ui/lab"
import React, { useState, useEffect, ChangeEvent } from "react"
import { Link, generatePath } from "react-router-dom"

interface MemberEntity {
  id: string
  login: string
  avatar_url: string
}

export const ListPage: React.FC = () => {
  const [organization, setOrganization] = useState<string>('lemoncode')
  const [members, setMembers] = useState<MemberEntity[]>([])
  const [filteredMembers, setFilteredMembers] = useState<MemberEntity[]>([])
  const [pages, setPages] = useState<number>(1)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const elementsPerPage = 5

  const loadPage = (_event: ChangeEvent, page: number): void => {
    const limit = page * elementsPerPage
    const offset = limit - elementsPerPage + 1
    setCurrentPage(page)
    setFilteredMembers(members.slice(offset - 1, limit))
  }

  const apiCall = () => {
    fetch(`https://api.github.com/orgs/${organization}/members`)
    .then((response) => response.ok ? response.json() : [])
    .then((json) => {
      setPages(Math.ceil(json.length / elementsPerPage))
      setCurrentPage(1)
      setMembers(json)
      setFilteredMembers(json.slice(0, elementsPerPage))
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    apiCall()
  }
  
  useEffect(() => {
    apiCall()
  }, [])

  return (
    <>
      <Typography variant="h2">Hello from List page</Typography>
      <Box m={2} />
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Organizacion"
          value={organization}
          onChange={(event) => setOrganization(event.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >Buscar</Button>
      </form>
      <Box m={1} />
      <Pagination count={pages} defaultPage={1} page={currentPage} onChange={loadPage} />
      <Box m={2} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredMembers.map((member) => (
            <TableRow key={member.id}>
              <TableCell>
                <img src={member.avatar_url} style={{ width: "5rem" }} />
              </TableCell>
              <TableCell>
                <span>{member.id}</span>
              </TableCell>
              <TableCell>
                <Link to={generatePath("/detail/:id", { id: member.login })}>
                  {member.login}
                </Link>{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
