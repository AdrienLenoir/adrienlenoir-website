<template>
  <div class="">
    <section class="creations-table mt-5">
      <div class="creations-table-title mb-3">
          <h4 class="mb-3">Portfolio</h4>
        <b-button
          label="Ajouter un projet"
          type="is-primary is-light"
          @click="isAddModalActive = true" />
      </div>

      <b-table
        ref="table"
        :data="projects"
        paginated
        per-page="5"
        detail-key="id"
        detail-transition="fade"
        :show-detail-icon="true"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"
        :bordered="false">

        <b-table-column v-slot="props" field="id" label="Id" width="40" numeric>
          {{ props.row.id }}
        </b-table-column>

        <b-table-column v-slot="props" field="name" label="Nom" sortable>
          {{ props.row.name }}
        </b-table-column>

        <b-table-column v-slot="props" field="link" label="Lien" sortable>
          {{ props.row.link }}
        </b-table-column>

        <b-table-column v-slot="props" label="" centered>
          <b-button
            label="Modifier"
            type="is-success is-light"
            size="is-small"
            @click="selectedProject = projects.filter(project => project.id === props.row.id)[0];isEditModalActive = true" />
          <b-button
            label="Supprimer"
            type="is-danger is-light"
            size="is-small"
            @click="selectedProject = projects.filter(project => project.id === props.row.id)[0];isDeleteModalActive = true" />
        </b-table-column>
      </b-table>
    </section>

    <b-modal
      v-model="isAddModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Ajout d'un projet"
      aria-modal>

      <template>
        <form @submit.prevent="addProject">
          <div class="modal-card" style="width: auto;min-width: 50vw">
            <header class="modal-card-head">
              <p class="modal-card-title">Ajout d'un projet</p>
              <button
                type="button"
                class="delete"
                @click="isAddModalActive = false"/>
            </header>
            <section class="modal-card-body">
              <b-field label="Nom">
                <b-input
                  v-model="addProjectForm.name"
                  type="text"
                  placeholder="Nom du projet"
                  required>
                </b-input>
              </b-field>
              <b-field label="Lien du projet">
                <b-input
                  v-model="addProjectForm.link"
                  type="text"
                  placeholder="Lien du projet"
                  required>
                </b-input>
              </b-field>
              <b-field label="Description du projet">
                <b-input
                  v-model="addProjectForm.description"
                  type="textarea"
                  placeholder="Description du projet"
                  required>
                </b-input>
              </b-field>
              <b-field>
                <b-upload v-model="addProjectForm.image" drag-drop expanded>
                  <section class="section">
                    <div class="content has-text-centered">
                      <p>
                        <b-icon
                          icon="upload"
                          size="is-large">
                        </b-icon>
                      </p>
                      <p>{{ addProjectForm.image.name ? addProjectForm.image.name : 'Sélectionner une image' }}</p>
                    </div>
                  </section>
                </b-upload>
              </b-field>
            </section>
            <footer class="modal-card-foot">
              <b-button
                label="Annuler"
                type="is-danger"
                @click="isAddModalActive = false" />
              <b-button
                native-type="submit"
                label="Ajouter"
                type="is-primary" />
            </footer>
          </div>
        </form>
      </template>
    </b-modal>

    <b-modal
      v-model="isEditModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Modification d'un projet"
      aria-modal>

      <template>
        <form @submit.prevent="editProject">
          <div class="modal-card" style="width: auto;min-width: 50vw">
            <header class="modal-card-head">
              <p class="modal-card-title">Modifier le projet : {{ selectedProject.name }}</p>
              <button
                type="button"
                class="delete"
                @click="isEditModalActive = false"/>
            </header>
            <section class="modal-card-body">
              <b-field label="Nom">
                <b-input
                  v-model="selectedProject.name"
                  type="text"
                  placeholder="Nom du projet"
                  required>
                </b-input>
              </b-field>
              <b-field label="Lien">
                <b-input
                  v-model="selectedProject.link"
                  type="text"
                  placeholder="Lien du du projet"
                  required>
                </b-input>
              </b-field>
              <b-field label="Description du projet">
                <b-input
                  v-model="selectedProject.description"
                  type="textarea"
                  placeholder="Description du projet"
                  required>
                </b-input>
              </b-field>
              <b-field>
                <b-upload v-model="selectedProject.image" drag-drop expanded>
                  <section class="section" :style="'background: url('+renderImage(selectedProject.image)+') top center / cover;'">
                    <div class="content has-text-centered">
                      <p>
                        <b-icon
                          icon="upload"
                          size="is-large">
                        </b-icon>
                      </p>
                      <p>{{ selectedProject.image.name ? selectedProject.image.name : 'Sélectionner une image' }}</p>
                    </div>
                  </section>
                </b-upload>
              </b-field>
            </section>
            <footer class="modal-card-foot">
              <b-button
                label="Annuler"
                type="is-danger"
                @click="isEditModalActive = false" />
              <b-button
                native-type="submit"
                label="Sauvegarder"
                type="is-primary" />
            </footer>
          </div>
        </form>
      </template>
    </b-modal>

    <b-modal
      v-model="isDeleteModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Suppression d'un projet"
      aria-modal>

      <template>
        <form @submit.prevent="deleteProject">
          <div class="modal-card" style="width: auto;min-width: 25vw">
            <header class="modal-card-head">
              <p class="modal-card-title">Suppression d'un projet</p>
              <button
                type="button"
                class="delete"
                @click="isDeleteModalActive = false"/>
            </header>
            <section class="modal-card-body">
              <p>Confirmez-vous la suppresion du projet "{{ selectedProject.name }}"</p>
            </section>
            <footer class="modal-card-foot">
              <b-button
                label="Annuler"
                type="is-danger"
                @click="isDeleteModalActive = false" />
              <b-button
                native-type="submit"
                label="Supprimer"
                type="is-primary" />
            </footer>
          </div>
        </form>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  components: {},
  layout: 'admin',
  async asyncData({ $axios }) {
    const projectsResult = await $axios.$get('/projects/all')

    if (projectsResult.success) {
      return {
        projects: projectsResult.projects ? projectsResult.projects : []
      }
    }
  },
  data() {
    return {
      isEditModalActive: false,
      isDeleteModalActive: false,
      isAddModalActive: false,
      projects: [],
      selectedProject: {
        id: 0,
        name: "",
        image: "",
        link: "",
        description: ""
      },
      addProjectForm: {
        name: "",
        image: "",
        link: "",
        description: ""
      }
    }
  },
  head() {
    return {
      title: '',
      meta: [
        {hid: 'og:description', name: 'og:description', content: ''},
        {hid: 'description', name: 'description', content: ''}
      ]
    }
  },
  mounted() {
    this.$store.commit('adminpage/SET_NAME', "Projets")
  },
  methods: {
    renderImage(file) {
      if (typeof file === "string")
        return '/api/upload/' + file;
      return file ? URL.createObjectURL(file) : "none.png"
    },
    async addProject() {
      const formData = new FormData()

      formData.append("name", this.addProjectForm.name)
      formData.append("background", this.addProjectForm.image)
      formData.append("link", this.addProjectForm.link)
      formData.append("description", this.addProjectForm.description)

      const result = await this.$axios.$post(`/admin/projects`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      if (result.success) {
        this.projects.push(result.project)
        this.isAddModalActive = false
      } else {
        this.$swal({
          toast: true,
          position:"top-end",
          showConfirmButton: false,
          timer: 2500,
          icon: "error",
          text: result.error
        });
      }
    },
    async editProject() {
      const formData = new FormData()

      formData.append("name", this.selectedProject.name)
      formData.append("background", this.selectedProject.image)
      formData.append("link", this.selectedProject.link)
      formData.append("description", this.selectedProject.description)

      const result = await this.$axios.$patch(`/admin/projects/${this.selectedProject.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      if (result.success) {
        this.$swal({
          toast: true,
          position:"top-end",
          showConfirmButton: false,
          timer: 2500,
          icon: "success",
          text: "Le projet à été mis à jour"
        });
        this.isEditModalActive = false
      } else {
        this.$swal({
          toast: true,
          position:"top-end",
          showConfirmButton: false,
          timer: 2500,
          icon: "error",
          text: result.error
        });
      }
    },
    async deleteProject() {
      const result = await this.$axios.$delete(`/admin/projects/${this.selectedProject.id}`)

      if (result.success) {
        this.projects = this.projects.filter(partner => partner.id !== this.selectedProject.id)
        this.isDeleteModalActive = false
      } else {
        this.$swal({
          toast: true,
          position:"top-end",
          showConfirmButton: false,
          timer: 2500,
          icon: "error",
          text: result.error
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.creations-table-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.views {
  margin-top: 35px;

  h3 {
    text-align: center;
    margin-bottom: 20px;
  }

  &-action {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    button {
      margin-bottom: 0.75rem;
      margin-left: 15px;
    }
  }

  .view {
    margin-bottom:25px;

    h4 {
      margin-bottom: 10px;
    }

    .upload {
      width: 100%;

      &-draggable {
        width: 100%;
      }
    }
  }
}
</style>
