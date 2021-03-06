<template>
  <v-row no-gutters class="fill-height pa-12" justify="center" align="center">
    <v-card width="100%">
      <form>
        <div class="d-flex flex-row justify-center py-5 display-1">
          {{ $t('voterListManager.createNewVoterList') }}
        </div>

        <v-divider class="mb-10"></v-divider>

        <div class="px-5">
          <v-text-field
            v-model="listName"
            :label="$t('voterListManager.labelListName')"
            outlined=""
          />
          <v-switch
            v-model="isPublic"
            :label="$t('voterListManager.labelIsPublic')"
          />
        </div>

        <div
          v-if="listId === null"
          class="d-flex flex-row justify-center px-12 mb-6 body"
        >
          <v-btn x-large color="primary" @click="addUsers">{{
            $t('voterListManager.continue')
          }}</v-btn>
        </div>

        <div v-if="listId !== null" class="pa-5">
          <h2 class="mb-3 text-center">{{ $t('voterListManager.voters') }}</h2>
          <v-data-table
            :headers="headers"
            :items="voters"
            :items-per-page="-1"
            :hide-default-footer="true"
            class="elevation-1"
          >
          </v-data-table>

          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
              <v-btn color="red lighten-2" dark class="mt-5" v-on="on">
                {{ $t('voterListManager.addVoter') }}
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>
                {{ $t('voterListManager.addVoter') }}
              </v-card-title>

              <v-card-text class="pt-5">
                <v-text-field
                  v-model="voter.email"
                  :label="$t('voterListManager.labelVoterEmail')"
                  outlined
                />
                <v-switch
                  v-model="voter.isRegistered"
                  :label="$t('voterListManager.labelVoterSubmittedGDPR')"
                />
                <v-file-input
                  v-if="!voter.isRegistered"
                  v-model="voter.file"
                  :label="$t('voterListManager.labelSignFile')"
                  outlined
                />
                <v-switch
                  v-if="!voter.isRegistered"
                  v-model="voter.isQes"
                  :label="$t('voterListManager.labelIsQes')"
                />
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="createAndAttachUser">
                  {{ $t('voterListManager.addVoter') }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </form>
    </v-card>
  </v-row>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  middleware: 'authenticated',
  data() {
    return {
      headers: [
        {
          text: this.$t('voterListManager.votersTable.voterName'),
          sortable: true,
          value: 'name'
        },
        {
          text: this.$t('voterListManager.votersTable.voterEmail'),
          sortable: true,
          value: 'email'
        },
        {
          text: this.$t('voterListManager.votersTable.voterQes'),
          sortable: true,
          value: 'file'
        },
        {
          text: this.$t('voterListManager.votersTable.actions'),
          sortable: false,
          value: 'actions',
          width: 300
        }
      ],
      listName: '',
      listId: null,
      voters: [],
      dialog: false,
      isPublic: false,
      voter: {
        isRegistered: true,
        email: '',
        file: null,
        isQes: true
      }
    }
  },
  methods: {
    ...mapActions('listManager', [
      'performAddList',
      'performAssignVoterToList'
    ]),
    ...mapActions('voter', ['performAddVoter']),

    handleUserAnswerChange(questionId, answerId) {
      this.userAnwers[questionId] = answerId
    },
    async addUsers() {
      const response = await this.performAddList({
        name: this.listName,
        isPublic: this.isPublic
      })

      this.listId = response.voterListId
      if (this.listId) {
        this.$store.dispatch(
          'snackbar/openSuccess',
          'Voter list has been created, please follow up by adding voters to the list'
        )
      }
    },
    async createAndAttachUser() {
      if (!this.voter.isRegistered) {
        if (this.voter.isQes !== undefined) {
          await this.performAddVoter({
            email: this.voter.email,
            file: this.voter.file,
            isQes: this.voter.isQes
          })
        } else {
          await this.performAddVoter({
            email: this.voter.email,
            file: this.voter.file,
            isQes: false
          })
        }
      }

      const isAdded = await this.performAssignVoterToList({
        userEmail: this.voter.email,
        voterListId: this.listId
      })

      if (isAdded) {
        let nameValue = '?'
        let qes = false
        if (isAdded.voter) {
          nameValue = isAdded.voter.name
        }
        if (isAdded.voter.isQes !== undefined) {
          qes = isAdded.voter.isQes
        }
        this.voters.push({
          email: this.voter.email,
          name: nameValue,
          isQes: qes,
          id: isAdded.voterId
        })
        this.$store.dispatch(
          'snackbar/openSuccess',
          'Voter has been added to the voter list'
        )
      }

      this.voter.email = ''
      this.voter.file = null
      this.dialog = false
      this.voter.isQes = true
    }
  }
}
</script>
